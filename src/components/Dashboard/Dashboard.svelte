<script>
  import Note from "../Note/Note.svelte";
  //TODO: resibo el array de notas
  export let notes ;
</script>

<section>
    {#each notes as {id, title, color, description}}
        <Note {id} {title} {color} {description}/>
    {/each}
</section>

<style>
    section{
        height: 100%;
        background: orange;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 30px;
        gap: 10px;
    }
</style>