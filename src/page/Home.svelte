<script>
  import Dashboard from "../components/Dashboard/Dashboard.svelte";
  import Navegation from "../components/Navegation/Navegation.svelte";
  import { v4 } from "uuid";
  //TODO: traigo mi estado global o variable para generar el cambio
  import { mode } from "../storage/storage";

  //TODO: existe en svelte un metodo llamado onmount que sirve para esperar que el componente este renderizado
  //TODO: tendria una funcion similar pero no igual a useEffect de react
  import { onMount } from 'svelte';


  let notes = [];
  let copyNotes = [...notes];

  //TODO: funcion onMount pasamos una funcion para hacer una peticion ene ste caso
  onMount(async () => {
    const res = await fetch('http://localhost:3000');
    const data = await res.json();
    notes=[...data.notes];
    copyNotes = [...notes];

    mode.set(data.settings.darkmode);
  });

  //TODO: con el signo de dolar : "$:" le decimos a svelte que observe a esa variable cuando cambie
  $: count = notes.length;
  function handleNew() {
    const color = generateColor();
    const id = v4();
    const note = {
      id: id,
      title: "",
      color: color,
      description: "",
    };

    fetch('http://localhost:3000/add', {
      method: "POST",
      body: JSON.stringify(note),
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.text())
    .then(res => console.log(res));


    notes = [...notes, note];
    copyNotes = [...notes];
  }

  function generateColor() {
    const colors = [
      "#DDFFC2",
      "#FFC2C2",
      "#FFEAC2",
      "#C2FFD3",
      "#C2FFEC",
      "#C2FAFF",
      "#C2E2FF",
      "#CBC2FF",
    ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  function handleUpdate(e) {
    console.log(e);
    const note = e.detail;
    const index = notes.findIndex((element) => element.id === note.id);

    fetch('http://localhost:3000/update', {
      method: "POST",
      body: JSON.stringify(e.detail),
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.text())
    .then(res => console.log(res));


    notes[index] = note;
    copyNotes = [...notes];
  }

  function handleColor(e) {
    const id = e.detail.id;
    const index = notes.findIndex((element) => element.id === id);
    notes[index].color = generateColor();
    copyNotes[index].color = notes[index].color;

    fetch('http://localhost:3000/update', {
      method: "POST",
      body: JSON.stringify(notes[index]),
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.text())
    .then(res => console.log(res));


  }

  function handleRemove(e) {
    const id = e.detail.id;
    const response = notes.filter((element) => element.id != id);

    fetch('http://localhost:3000/remove', {
      method: "POST",
      body: JSON.stringify({id: id}),
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.text())
    .then(res => console.log(res));

    notes = [...response];
    copyNotes = [...notes];
  }

  function handleSearch(e) {
    const query = e.target.value;

    if (query === "") {
      copyNotes = [...notes];
      return false;
    }

    const result = notes.filter((note) => {
      const description = note.description.toLowerCase();
      const title = note.title.toLowerCase();

      //TODO: realizamos las busquedas en los campos agrego validaciones
      return (
        title.indexOf(query.toLowerCase()) > -1 ||
        description.indexOf(query.toLowerCase()) > -1
      );
    });

    copyNotes = [...result];
  }
</script>

<main class={$mode ? "darkmode" : ""}>
  <Navegation icon={"Animas Notas"} {count} on:input={handleSearch} />
  <Dashboard
    bind:notes={copyNotes}
    on:click={handleNew}
    on:update={handleUpdate}
    on:color={handleColor}
    on:remove={handleRemove}
  />
</main>

<style>
   :global(*){
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  :global(body) {
    height: 100vh;
    width: 100%;
  }
  :global(main.darkmode, main.darkmode textarea, main.darkmode input) {
    background: #333333;
    color: #ffffff;
  }

  main {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
