<script>
  import Logo from "../Logo/Logo.svelte";
  import Search from "../Search/Search.svelte";
  //TODO: serian como variables globales que puedo acceder desde cualqueir aprte de mi app
  import { mode } from "../../storage/storage";
  import { counter } from "../../storage/storage";

  export let icon = "";
  export let count;
  //TODO: asi se modifican usando metodos que ya propios de svelte
  function handleMode() {
    mode.update((mode) => !mode);

    fetch("http://localhost:3000/darkmode", {
      method: "POST",
      body: JSON.stringify({ darkmode: $mode }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((res) => console.log(res));
    counter.update((counter) => counter + 1);
  }
</script>

<nav>
  <Logo appName={icon} />
  <div>
    <p>Tareas en total {count}</p>
  </div>
  <Search on:input />
  <div>
    <!-- TODO: poniendo el signo $ juntoa  la variable puedo reprecentar el cambio -->
    {$mode} - {$counter}
    <button on:click={handleMode}> Modo</button>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: blue;
    width: 100%;
    height: 40px;
    padding: 30px;
  }
</style>
