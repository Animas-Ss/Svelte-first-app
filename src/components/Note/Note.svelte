<script>
    export let title;
    export let id;
    export let color;
    export let description;
</script>

<div class="card" style={`background: ${color}`}>
    <div class="header">
        <h5>{id}</h5>
        <div class="options">
            <button>Eliminar</button>
            <button>color</button>
        </div>
    </div>
   <div class="content">
    <div class="title">
        <input type="text" placeholder="Sin titulo..." bind:value={title} />
    </div>
    <div class="description">
        <textarea name="" id="" cols="20" rows="10" placeholder="Escribir..." bind:value={description}/>
    </div>
   </div>
</div>


<style>
    .card{
        width: 200px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        background: transparent;
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
    }
    textarea{
        outline: none;
        border: none;
        width: 100%;
        background: transparent;
    }
    input{
        outline: none;
        border: none;
        background: transparent;
        width: 100%;
    }
</style>