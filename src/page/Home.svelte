<script>
  import Dashboard from "../components/Dashboard/Dashboard.svelte";
  import Navegation from "../components/Navegation/Navegation.svelte";

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
</script>

<main>
  <Navegation icon={"Animas Notas"} count={notes.length}/>
  <Dashboard notes={notes}/>
</main>

<style>
    main{
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
