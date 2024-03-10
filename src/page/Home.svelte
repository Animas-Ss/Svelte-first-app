<script>
  import Dashboard from "../components/Dashboard/Dashboard.svelte";
  import Navegation from "../components/Navegation/Navegation.svelte";
  import {v4} from 'uuid';

  let notes = [
    {
      id: 0,
      title: "Aprendiendo Svelte",
      color: "red",
      description: "Aprendiendo nueva libreria de componentes Svelte",
    },
    {
      id: 1,
      title: "Pasando notas y props",
      color: "green",
      description: "Aprendiendo a pasar props en Svelte",
    },
  ];
  let copyNotes = [...notes];
  //TODO: con el signo de dolar : "$:" le decimos a svelte que observe a esa variable cuando cambie
  $: count = notes.length
  function handleNew (){
    const color = generateColor();
    const id = v4();
    const note = {
      id: id,
      title: '',
      color: color,
      description: ''
    };
    notes = [...notes, note];
    copyNotes = [...notes]
  }

  function generateColor(){
    const colors = ['#DDFFC2','#FFC2C2','#FFEAC2','#C2FFD3','#C2FFEC','#C2FAFF','#C2E2FF','#CBC2FF',];
    const index = Math.floor(Math.random() * (colors.length));
    return colors[index]
  }

  function handleUpdate(e){
    console.log(e)
    const note = e.detail;
    const index = notes.findIndex(element => element.id === note.id);
    notes[index] = note;
    copyNotes=[...notes]
  }

  function handleColor(e){
    const id = e.detail.id;
    const index = notes.findIndex(element => element.id === id);
    notes[index].color = generateColor();
    copyNotes[index].color = notes[index].color
  }

  function handleRemove(e){
    const id = e.detail.id;
    const response = notes.filter(element => element.id != id);
    notes = [...response]
    copyNotes=[...notes]
  }

  function handleSearch(e){
    const query = e.target.value;
    
    if(query === ''){
      copyNotes = [...notes]
      return false;
    }

    const result =  notes.filter(note => {
      const description = note.description.toLowerCase()
      const title = note.title.toLowerCase()

      //TODO: realizamos las busquedas en los campos agrego validaciones  
      return title.indexOf(query.toLowerCase()) > -1 || description.indexOf(query.toLowerCase()) > -1
    });

    copyNotes = [...result]
  }
  
</script>

<main>
  <Navegation icon={"Animas Notas"} count={count} on:input={handleSearch}/>
  <Dashboard bind:notes={copyNotes} on:click={handleNew} on:update={handleUpdate} on:color={handleColor} on:remove={handleRemove}/>
</main>

<style>
    main{
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
