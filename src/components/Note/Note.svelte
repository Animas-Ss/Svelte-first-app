<script>
    import { createEventDispatcher } from 'svelte'
    export let title;
    export let id;
    export let color;
    export let description;

    //TODO: para actualizar los datos obtenidos del padre creamos un dispach que es apra crear un evento personalizado
    const dispach = createEventDispatcher()
    
    //TODO: creamos una funcion para actualizar

    function handleChange(){
        /*  dispach('update', {
            id: id,
            title:title,
            color:color,
            description:description
         }); */
    }

    function handleColor(){
        dispach('color', {
            id: id
        })
    }

    function handleRemove(){
          dispach('remove', {
            id: id
          })
    }
</script>

<div class="card" style={`background: ${color}`}>
    <div class="header">
        <div class="options">
            <button on:click={handleRemove}>Eliminar</button>
            <button on:click={handleColor}>color</button>
        </div>
    </div>
   <div class="content">
    <div class="title">
        <input type="text" placeholder="Sin titulo..." bind:value={title} on:change={handleChange} />
    </div>
    <div class="description">
        <textarea name="" id="" cols="20" rows="10" placeholder="Escribir..." bind:value={description} on:change={handleChange}/>
    </div>
   </div>
</div>


<style>
    .card{
        width: 320px;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        border: 2px solid transparent;
        background: transparent;
    }
    .card:focus-within{
        border: 2px solid #000;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px;
    }
    .content{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 0 20px;
    }
    textarea{
        outline: none;
        border: none;
        resize: none;
        width: 100%;
        height: 250px;
        background: transparent;
    }
    input{
        outline: none;
        border: none;
        background: transparent;
        width: 100%;
        font-size: 22px;
        font-weight: bold;
        padding: 10px 0;
    }
    button{
        margin: 0;
        border: none;
        background: transparent;
        cursor: pointer;
    }
</style>