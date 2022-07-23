<template> 
 <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <!-- Menu de adorno o a modificar -->
                
                <div class="row">
                    <div class="col-md-4">
                    </div>
                    <div id="col-md-4-2" class="col-md-4">
                        
                        <!-- titulo de columna central -->
                        <h3 id="TituloPagina">
                            BIENVENIDO
                        </h3>
                        <p id="ImgPerfil"><img alt="Perfil del Usuario" src="../../assets/usuario.jpg" /></p>

                        <!-- captura de datos de usuarios -->
                        <form role="form">
                            <div class="form-group">
                                 
                                <label for="exampleInputEmail1">
                                    Correo
                                </label>
                                <input type="email" class="form-control" id="exampleInputEmail1" />
                            </div>
                            <div class="form-group">
                                 
                                <label for="exampleInputPassword1">
                                    Contraseña
                                </label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            
                            <div class="checkbox">
                                 <!-- checkbox opcional -->
                                <label>
                                    <input type="checkbox" /> Recordar
                                </label>
                            </div> 

                            <!-- botones de acción -->
                            <button id="entrar" type="submit" class="btn btn-primary">
                                <a href="http://localhost:3000/contenido" style="color: white;">Entrar</a>
                            </button>

                            <button id="G" type="submit" class="btn btn-primary">
                                <b>G</b> Entrar con Google
                            </button>
                            <button id="F" type="submit" class="btn btn-primary">
                                <b>f</b> Entrar con Facebook
                            </button>

                            <button type="button" class="btn btn-link">¿Olvidaste tu Contraseña?</button>
                            <button type="button" class="btn btn-link">Create una Cuenta</button>
                        </form>
                    </div> 
                    <!-- Fin columna central -->
                    <div class="col-md-4">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>