<script>
  import NewNote from "../NewNote/NewNote.svelte";
import Note from "../Note/Note.svelte";
  //TODO: resibo el array de notas
  export let notes ;
</script>

<section>
    <NewNote on:click/>
    {#each notes as {id, title, color, description}}
        <Note {id} bind:title={title} {color} bind:description={description} on:update on:color on:remove/>
    {/each}
</section>

<style>
    :global(*){
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    section{
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 30px;
        gap: 10px;
    }
</style>