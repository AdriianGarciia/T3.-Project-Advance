
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

                 <!-- Escribir Notas -->
                 <div id="CrearNota" class="container-fluid">
                    <div class="card-body">
                        <h5 class="card-title">Escribe tu Nota</h5>
                        <label>Id Nota</label>
                        <input type="text" placeholder="Id Nota" v-model="inputId">
                        <label>Titulo de Nota</label>
                        <input type="text" placeholder="Titulo" v-model="inputTitulo">
                        <label>Escribe</label>
                        <textarea name="" id="" cols="30" rows="10" v-model="inputContenido"
                        placeholder="Escribe Aquí"></textarea>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" 
                        data-bs-target="#exampleModal" @click="actionAdd(), CrearNotas()">Agregar</button>
                    </div>
                </div>
                 <!-- Tabla de Notas -->
                 <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>
                                            Id Nota
                                        </th>
                                        <th>
                                            Titulo
                                        </th>
                                        <th>
                                            Contenido
                                        </th>
                                        <th>
                                            Botones Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, idex) in data" :key="row.id" v-bind:class="{ 'table-active' : index % 2 == 0}">
                                        <td>
                                            {{ row.IdNota }}
                                        </td>
                                        <td>
                                            {{ row.TituloNota }}
                                        </td>
                                        <td>
                                            {{ row.ContenidoNota}}
                                        </td>
                                        <td>
                                            <!--<button type="button" class="btn btn-success" data-bs-toggle="modal" 
                                            data-bs-target="#exampleModal" @click="ActualizarNota(index)">
                                                Actualizar
                                            </button>-->
                                            <button type="button" class="btn btn-danger" @click="EliminarNota(index)">
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!--<div id="Notas" style="border: 2px solid black" class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <label for="">Id: </label>
                            <label for="">usuario: </label>
                            <h2>
                                Primera Nota
                            </h2>
                            <p>
                                Primer ejemplo de nota de la página. Ejemplo de como lucen las notas de la página.
                            </p>
                            <p>
                                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Actualizar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </p>
                        </div>
                    </div>
                </div>         
                -->
                <!-- Div Final -->

               </div>



               <input type="radio" name="radio" id="radio2">
               <div class="tab2" id="tab2"> 
                    <h1>Cabiar Color de Fondo</h1>
                    <!--Aqui -->
                    
                     <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <table class="table">                                    
                                    <tbody>                                        
                                        <tr>
                                            <td>
                                                <button type="button" style="color:black; background-color:white" class="btn btn-success">
                                                    White
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" style="color:black; background-color:aquamarine" class="btn btn-success">
                                                    Aqua
                                                </button> 
                                            </td>
                                            <td>
                                                <button type="button" style="color:white; background-color:brown" class="btn btn-success">
                                                    Brown
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button id="BlackColor" onclick="ColorFondo" type="button" style="color:white; background-color:black" class="btn btn-success">
                                                    Black
                                                </button> 
                                            </td>
                                            <td>
                                                <button type="button" style="color:white; background-color:gray" class="btn btn-success">
                                                    Gray
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" style="color:black; background-color:beige" class="btn btn-success">
                                                    Beige
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button type="button" style="color:white; background-color:blue" class="btn btn-success">
                                                    Blue
                                                </button> 
                                            </td>
                                            <td>
                                                <button type="button" style="color:black; background-color:cyan" class="btn btn-success">
                                                    Cyan
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" style="color:white; background-color:blueviolet" class="btn btn-success">
                                                    Violet
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button type="button" style="color:white; background-color:red" class="btn btn-success">
                                                    Red
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" style="color:black; background-color:pink" class="btn btn-success">
                                                    Pink
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" style="color:black; background-color:orange" class="btn btn-success">
                                                    Orange
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-6">
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

/*AQUI EL CSS DE TODAS MIS NOTAS Y CAMBIO DE COLOR DE FONDO*/ 

.col-md-6 button {
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

/* Mis notas y cambios para las notas escritas */

#Notas {
    width: 300px;
    margin: 10px;
    float: left;
    display: flex;
}
#Notas label {
    margin: 10px;
}
#Notas button {
    width: 100px;
    margin: 5px;
}

table {
    float: right;
    margin: 5px;
    margin-left: 600px;
}
table button {
    width: 100px;
    margin: 5px;
}

#CrearNota {
    float: left;
    border: 2px solid red;
    margin: 1px;
    width: 345px;
}
#CrearNota button {
    width: 100px;
    margin: 5px;
}
#CrearNota input {
    width: 258px;
    margin: 1px;
    border: 1px solid blue;
}
#CrearNota textarea {
    border: 1px solid blue;
    width: 350pxs;
    height: 100px;
}

</style>


<script>
    export default {
        data() {
            return {
                /*data : [
                    {ContactId: 1, Name: "Veronica", Phone: "4494656742", Date: "12/10/2022", Status: "No Activo"},
                    {ContactId: 2, Name: "Laura", Phone: "4497852852", Date: "11/10/2022", Status: "Activo"},
                    {ContactId: 3, Name: "Miguel", Phone: "4495236963", Date: "13/10/2022", Status: "No Activo"},
                    {ContactId: 4, Name: "Manuel", Phone: "4499632789", Date: "12/09/2022", Status: "Activo"},
                    {ContactId: 5, Name: "Fernan", Phone: "4497412321", Date: "08/10/2022", Status: "No Activo"}
                ],*/
                data : [],
                inputId : "",
                inputTitulo : "",
                inputContenido : "",
                action : ""
                /*,
                action : "",
                index : ""*/
            }
        },
        methods: {
            actionAdd() {
                this.action = "Add";
            },
            select(id, index) {
                console.log("Rowid = " + id);
                console.log("Index = " + index);
                console.log(this.data[index].TituloNota);
                this.data[index].TituloNota = "Modificado";
                console.log(this.data[index].TituloNota);
            },
            details(index) {
                const headers = { "Content-Type": "application/json" };
                fetch("http://localhost/Backend/Api/read_one.php?ContactId="+ parseInt(this.data[index].IdNota))
                    .then(async response => {
                        const res = await response.json();
                        console.log(res);
                        if(!response.OK) {
                            const error = (res && res.message) || response.StatusText;
                            return Proimise.reject(error);
                        } else {
                            console.log(response);
                        }
                    })
                    .catch(error => {
                        this.errorMessage = error;
                        console.error("Ocurrio un error: ", error);
                    });
            },
            /*fillTable(){
                const headers = { "Content-Type": "application/json" };
                fetch("http://localhost/Backend/Api/read.php")
                    .then(async response => {
                        const res = await response.json();
                        console.log(res);

                        if(!response.OK) {
                            const error = (res && res.message) || response.StatusText;
                            return Proimise.reject(error);
                        } else {
                            this.data = res.body;
                        }
                    })
                    .catch(error => {
                        this.errorMessage = error;
                        console.error("Ocurrio un error: ", error);
                    })
            },*/
            EliminarNota(index) {                
                const requestOptions = {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ IdNota: parseInt(this.data[index].IdNota)})
                };
                fetch("http://localhost/ProyectoFinalBackend/Api/Delete.php", requestOptions)
                    .then(async response => {
                        const data = await response.json();

                        if (data != "OK") {
                            const error = response.StatusText;
                            return Proimise.reject(error);
                        } else {
                            console.log(response.body);
                        }
                    })
                    .catch(error => {
                        this.errorMessage = error;
                        console.error("Ocurrio un error: ", error);
                    });
                    alert("Eliminado");

            },
            create() {
                //this.data.push({ContactId: 13, Name: "Lily", Phone: "449745412", Date: "18/10/2022", Status: "Activo"});
                this.data.push({IdNota: document.getElemetById("IdNota").value, 
                TituloNota: document.getElemetById("TituloNota").value, 
                ContenidoNota: document.getElemetById("ContenidoNota").value});
                
            },
            createNew() {
                this.data.push({IdNota: this.inputId, TituloNota: this.inputTitulo, ContenidoNota: this.inputContenido});
            },
            CrearNotas() {
                if (this.inputId != "" && this.inputTitulo != "" && this.inputContenido != "") {
                    if (this.action == "Add") {
                        const requestOptions = {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({TituloNota: this.inputTitulo, ContenidoNota: this.inputContenido})
                        };
                        fetch("http://localhost/ProyectoFinalBackend/Api/Create.php", requestOptions)
                            .then(async response => {
                                const data = await response.json();

                                if (data != "OK") {
                                    const error = response.StatusText;
                                    return Proimise.reject(error);
                                } else {
                                    console.log(response.body);
                                }
                            })
                            .catch(error => {
                                this.errorMessage = error;
                                console.error("Ocurrio un error: ", error);
                            });
                            alert("Agregado");
                            this.data.push({IdNota: this.inputId, TituloNota: this.inputTitulo, ContenidoNota: this.inputContenido});
                            this.inputId="";
                            this.inputTitulo="";
                            this.inputContenido="";
                    } else if (this.action == "update") {
                        const requestOptions = {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({IdNota: parseInt(this.inputId), TituloNota: this.inputTitulo, ContenidoNota: this.inputContenido})
                        };
                        fetch("http://localhost/ProyectoFinalBackend/Api/Update.php", requestOptions)
                            .then(async response => {
                                const data = await response.json();

                                if(data != "OK") {
                                    const error = response.StatusText;
                                    return Proimise.reject(error);
                                } else {
                                    console.log(response.body);
                                }
                            })
                            .catch(error => {
                                this.errorMessage = error;
                                console.error("Ocurrio un error: ", error);
                            });
                            alert("Actualizado");                            
                    }
                    /*this.data.push({id: this.inputID, contact: this.inputContact, phone: this.inputPhone, date: this.inputDate, status: this.inputStatus});
                    this.inputID="";
                    this.inputContact="";
                    this.inputPhone="";
                    this.inputDate="";
                    this.inputStatus="";*/
                } else {
                    alert("Todos los campos son requeridos");
                }
                
            },
            updateRow(index) {
                this.action = "update";
                this.inputId = this.data[index].IdNota;
                this.inputTitulo = this.data[index].TituloNota;
                this.inputContenido = this.data[index].ContenidoNota;
            },
            clearVar() {
                this.inputId = "";
                this.inputTitulo = "";
                this.inputContenido = "";
            }
        },           
        created() {
            const headers = { "Content-Type": "application/json" };
            fetch("http://localhost/ProyectoFinalBackend/Api/Read.php")
                .then(async response => {
                    const res = await response.json();
                    console.log(res);
                    if (!response.OK) {
                        const error = (res && res.message) || response.StatusText;
                        return Proimise.reject(error);
                    } else {
                        this.data = res.body;
                    }
                })
                .catch(error => {
                    this.errorMessage = error;
                    console.error("Ocurrio un error: ", error);
                });
                
        },
        
        props: {
            title: String 
        }
        /*,
        created() {
            const header = { "Content-Type": "application/json"};
            fetch("https:/regres.in/api/products/3")
                .then(async response => await response.json())
                .then(data => (console.log(data)));
        }*/
    }
</script>