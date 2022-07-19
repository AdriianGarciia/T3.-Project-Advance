
<template>

<div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion" style="color: white; background-color: black;">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Mis Notas</div>
                            <a class="nav-link">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                <label for="radio1">Todas Mis Notas</label>
                            </a>

                            <div class="sb-sidenav-menu-heading">Interface</div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Diseño
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>

                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">  
                                    <a class="nav-link" href="#"><label for="radio2">Cambiar color de Fondo</label></a>
                                </nav>
                            </div>
                            <div class="sb-sidenav-menu-heading">Complementos</div>
                            <a class="nav-link"  data-target="#basura">
                                <div class="sb-nav-link-icon"><i class=""></i></div>
                                <label for="radio3">Configuración</label>
                            </a>
                            <a class="nav-link"  data-target="#configuracion">
                                <div class="sb-nav-link-icon"><i class=""></i></div>
                                <label for="radio4">Perfil</label>
                            </a>
                        </div>
                    </div>

                    <div class="sb-sidenav-footer">
                        <div class="small"></div>
                        The Notebook
                    </div>
                </nav>
            </div>

            <!--Contenido-->
            <div class="content">
               <input type="radio" name="radio" id="radio1">
               <div class="tab1" id="tab1"> 
                 <h1>Todas mis Notas</h1> 
                 <!--Todas Mis Notas-->
                <div class="container-fluid">
                    <div  class="row">
                        <div id="Notas" style="background-color: white; margin: 30px; border: 2px solid black" class="col-md-4">
                            <h2>
                                Nota 1
                            </h2>
                            <p>
                                Escribe aquí tus notas importantes.
                            </p>
                            <button type="button" class="btn btn-info">
                                Crear Nota
                            </button> 
                            <button type="button" class="btn btn-success">
                                Actualizar
                            </button>
                        </div>
                        <div id="Notas" style="background-color: white; margin: 30px; border: 2px solid black" class="col-md-4">
                            <h2>
                                Nota 2
                            </h2>
                            <p>
                                Escribe aqui tus notas importantes.
                            </p>
                            <button type="button" class="btn btn-info">
                                Crear Nota
                            </button> 
                            <button type="button" class="btn btn-success">
                                Actualizar
                            </button>
                        </div>
                        <div id="Notas" style="background-color: white; margin: 30px; border: 2px solid black" class="col-md-4">
                            <h2>
                                Nota 3
                            </h2>
                            <p>
                                Escribe aqui tus notas importantes.
                            </p>
                            <button type="button" class="btn btn-info">
                                Crear Nota
                            </button> 
                            <button type="button" class="btn btn-success">
                                Actualizar
                            </button>
                        </div>
                    </div>
                </div>

               </div>



               <input type="radio" name="radio" id="radio2">
               <div class="tab2" id="tab2"> 
                    <h1>Cabiar Color de Fondo</h1>
                    <!--Aqui -->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div id="BotonesFondo" class="col-md-4">
                                        
                                        <button type="button" style="color:black; background-color:white" class="btn btn-success">
                                            White
                                        </button> 
                                        <button type="button" style="color:black; background-color:aquamarine" class="btn btn-success">
                                            Aquamarine
                                        </button> 
                                        <button type="button" style="color:black; background-color:beige" class="btn btn-success">
                                            Beige
                                        </button>
                                        <button type="button" style="color:white; background-color:gray" class="btn btn-success">
                                            Gray
                                        </button>
                                    </div>
                                    <div id="BotonesFondo" class="col-md-4">
                                        
                                        <button type="button" style="color:white; background-color:black" class="btn btn-success">
                                            Black
                                        </button> 
                                        <button type="button" style="color:white; background-color:blue" class="btn btn-success">
                                            Blue
                                        </button> 
                                        <button type="button" style="color:white; background-color:blueviolet" class="btn btn-success">
                                            Violet
                                        </button>
                                        <button type="button" style="color:black; background-color:cyan" class="btn btn-success">
                                            Cyan
                                        </button>
                                    </div>
                                    <div id="BotonesFondo" class="col-md-4">
                                        
                                        <button type="button" style="color:white; background-color:brown" class="btn btn-success">
                                            Brown
                                        </button> 
                                        <button type="button" style="color:black; background-color:pink" class="btn btn-success">
                                            Pink
                                        </button> 
                                        <button type="button" style="color:white; background-color:red" class="btn btn-success">
                                            Red
                                        </button>
                                        <button type="button" style="color:black; background-color:orange" class="btn btn-success">
                                            Orange
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <input type="radio" name="radio" id="radio3">
               <div class="tab3" id="tab3"> 
                  <h1 id="titcon">Editar Perfil</h1>
                  <img id="imgcon" alt="Bootstrap Image Preview" src="../../assets/usuario.jpg" name="Editar Foto de Perfil" class="rounded-circle" />
                  <h5 id="fotop">Subir Foto <input type="file"></h5>
                  <div id="datosconfig">
                    
                    <H5 style="padding-right: 20px;">Ingrese la Nueva contraseña  </H5><input type="text" id="contra1"> 
                    <div style="width: 40px;"></div>
                    <H5 style="padding-right: 20px;">Confirmar contraseña  </H5><br><input type="text" id="contra2">
                  </div>
                   <button id="botactu">Actualizar</button>
                </div> 


                <input type="radio" name="radio" id="radio4">
               <div class="tab4" id="tab4"> 
                  <h1 id="titcon">Perfil</h1>
                  <img id="imgcon" alt="Bootstrap Image Preview" src="../../assets/usuario.jpg" name="Editar Foto de Perfil" class="rounded-circle" />
                  <div id="datosp1">
                    <h5>Email</h5>
                    <input type="text" name="email" id="">
                    <div style="width: 40px;"></div>
                  </div>
                  <div id="datosp2">
                    <h5>Categorias creadas</h5>
                    <input type="text" name="email" id="">                  
                  </div>
                    <div id="datosp3">
                    <h5>Notas Creadas</h5>
                    <input type="text" name="email" id="">
                    </div>
                </div>

            </div>

</div>
  

</template>


<style>
/** CSS CONTENIDO SU */

 /**CSS cambio de pestañas */ 
.content{
    position: relative;
}
.content #tab1,#tab2,#tab3,#tab4{
    position: absolute;
    text-align: 1.8;
    transition: all 600ms ease;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.90);
    padding: 30px;
    background: #fff;
    padding-bottom: 40px;
}
#radio1,#radio2,#radio3,#radio4{
    display: none;
}
#radio1:checked ~ .tab1,
#radio2:checked ~ .tab2,
#radio3:checked ~ .tab3,
#radio4:checked ~ .tab4
{
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}


/** CSS Configuración */
#titcon{
    text-align: center;
    width: 1060px;
    margin-top: -30px;
   
}
#imgcon{
    text-align: center;
    width: 150px;
    margin-left: 450px;
    margin-bottom: 20px;
}
#fotop{
    margin-bottom: 30px;
}
#cambiperf{
    text-align: center;
    width: 800px;
}
#datosconfig{
   display: flex;
   margin-bottom: 50px;
}

#botactu{
    padding: 10px;
    width: 100px;
    margin-left: 450px;
    margin-bottom: -50px;
    
}

/**CSS DE PERFIL */


/*AQUI EL CSS DE TODAS MIS NOTAS Y CAMBIO DE COLOR DE FONDO*/ 

.col-md-4 button {
    width: 100px;
    margin: 10px;
    border-radius: 10px;
}

#BotonesFondo {
    padding: 50px;
    width: 800px;
    margin-top: 10px;
    margin-left: 50px;
    margin-bottom: -50px;
}

#Notas {
    padding: -10px;
    width: 500px;
    margin-top: 10px;
    margin-left: 5px;
    margin-bottom: -30px;
    display: flex;
}

#Notas h2, p {
    margin: 10px;
}

</style>