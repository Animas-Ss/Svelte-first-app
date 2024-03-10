<script>
</script>

<div>
    <div class="input-search">
        <input type="search" placeholder="Buscar" on:input>
        <i class="search-icon fa fa-search"></i>
    </div>
</div>

<style>
    /* Estilos generales para todos los input */
input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;
}

/* Estilos cuando el input está enfocado */
input:focus {
    border-color: dodgerblue;
    box-shadow: 0 0 5px dodgerblue;
}

/* Estilos para un input de búsqueda */
input[type="search"] {
    padding-right: 30px; /* Espacio para el icono de búsqueda */
}

/* Estilos para un input de búsqueda con un icono */
.input-search {
    position: relative;
}

.input-search input[type="search"] {
    padding-right: 30px; /* Espacio para el icono de búsqueda */
}

.input-search .search-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #999;
}
</style>