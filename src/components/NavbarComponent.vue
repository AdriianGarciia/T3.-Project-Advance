<template>
 <header class="header" >
   <nav class="navbar">
     <div class="container-fluid">
       <a class="navbar-brand" href="#" style="color: white;"> <b style="color: white;">NoteBook</b></a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="background-color: rgba(133, 133, 133, 0.377);">
         <span class="navbar-toggler-icon" style="background-color: rgba(133, 133, 133, 0.377);"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav m-auto">
           <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="#descrip" style="color: white;"><b>Descripción</b></a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#premium" style="color: white;"><b>Premium</b></a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#contac" style="color: white;"><b>Contactanos</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <h1 class="titulo"> THE NOTEBOOK</h1>
     <div class="d-grid gap-2 col-6 mx-auto" style="color: white;">
      <button class="btn btn-primary botonlogin" type="button"><a href="http://localhost:3000/login" style="color: white;">Inicar Sesión </a> </button>
      <button class="btn btn-primary botonlogin" type="button"> <a href="http://localhost:3000/registro" style="color: white;">Registrarse</a></button>
     </div>
 </header>
</template>

<style>
 .header{
  background: url(../assets/harry1.jpeg);
  background-size: cover;
  height: 100%;
  padding-bottom: 300px;
}
.navbar{
   background-color: rgba(133, 133, 133, 0.377);
   color: white;
}
.titulo{
  text-align: center;
  padding-bottom: 50px;
  color: white;
}
.Paste{
	position: fixed;
	top: 0;
}
.navbar-toggler{
  border: 5px solid white;
}
.botonlogin{
  background-color: rgba(99, 56, 43, 0.377);;
  margin-left: 120px;
}
</style>