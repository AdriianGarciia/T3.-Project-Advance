<template>
 <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <!-- menú superior decorativo o de acción -->
                
                <!-- Inicio del cuadro de Registro -->
                <div class="row">
                    <div class="col-md-4">
                    </div>
                    <div id="col-md-4-2" class="col-md-4">
                        
                        <h3 id="TituloPagina">
                            REGISTRATE
                        </h3>
                        
                        <form role="form">
                            <div class="form-group">
                                 
                                <label for="exampleInputEmail1">
                                    Nombre de Usuario
                                </label>
                                <input type="text" class="form-control" id="exampleInputEmail1" />
                            </div>
                            <div class="form-group">
                                 
                                <label for="exampleInputPassword1">
                                    Correo Electronico
                                </label>
                                <input type="email" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-group">
                                 
                                <label for="exampleInputEmail1">
                                    Contraseña
                                </label>
                                <input type="password" class="form-control" id="exampleInputEmail1" />
                            </div>
                            <div class="form-group">
                                 
                                <label for="exampleInputPassword1">
                                    Confirmar Contraseña
                                </label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            
                            <!-- Botones de acción -->
                            <button id="registrate" type="submit" class="btn btn-primary">
                                <a href="http://localhost:3000/contenido" style="color: white;">Registrarse</a>
                            </button>

                            <button type="button" class="btn btn-link"  href="http://localhost:3000/login">¿Ya tienes una cuenta?</button>
                        </form>
                    </div>
                    <div class="col-md-4">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
 /* influencia en las columas que componenlos elementos de la pagina */
.col-md-4 {
    background-color:  whitesmoke;
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