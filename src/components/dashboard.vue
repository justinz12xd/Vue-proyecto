<template>
    <div class="contenedor">
        <div class="dashboard">
            <h1>Dashboard</h1>
            <p>Bienvenido al Dashboard</p>
        </div>
    </div>
</template>

<style scoped>

    .contenedor {
        display: grid;
        grid-template-columns: repeat(3, 1f r);
        grid-gap: 20px;
        grid-auto-rows: minmax(100px, auto);
    }

    .dashboard {
        grid-column: 20 / 31; 
        grid-row: 1 / 4; 
        background-color: #1f3d24;
        padding: 2rem;
        border-radius: 8px;
        color: white;
        text-align: center;
        width: 400px;
    }
</style>
