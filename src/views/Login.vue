<script setup lang="ts">
import InicioSesion from "../components/ComponentIsidora/InicioSesion.vue";

</script>

<template>
 <InicioSesion/>
</template>

<style>
  /* influencia en las columas que componenlos elementos de la pagina */
.col-md-4 {
    background-color: whitesmoke;
}

#col-md-4-2 {
    background-color: whitesmoke;
    margin-top: 20px;
    margin-bottom: 30px;
}
/* inicio de modificación y programación de la pagina */
#TituloPagina {
    text-align: center;
    font-size: 40px;
    margin: 10px;
}

#ImgPerfil {
    text-align: center;
}

#ImgPerfil img {
    border-radius: 100px;
    width: 140px;
}

.checkbox {
    margin: 5px;
}
/* modificación general de todos los botones */
button {
    width: 400px;
    border-radius: 30px;
}
/* modificaciones propias de cada boton */
#G {
    margin: 5px;
    margin-top: 20px;
    background-color: rgb(236, 55, 55);
}

#F {
    margin: 5px;
    background-color: rgb(48, 48, 177);
    margin-bottom: 20px;
}

#entrar {
    margin: 5px;
}

.form-control {
    width: 400px;
}

/* Acción aparte en Registro.htlm */
#registrate {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>