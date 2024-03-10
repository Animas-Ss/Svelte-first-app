<script>
  import Logo from "../Logo/Logo.svelte";
import Search from "../Search/Search.svelte";

    export let icon = '';
    export let count ;
</script>

<nav>
    <Logo appName={icon}/>
    <div>
        <p>Tareas en total {count}</p>
    </div>
    <Search/>
    <ul>
        <li>notas</li>
        <li>mas</li>
    </ul>
</nav>

<style>
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: blue;
        width: 100%;
        height: 40px;
        padding: 30px;
    }
    ul{
        display: flex;
        gap: 50px;
        list-style: none;
    }
</style>