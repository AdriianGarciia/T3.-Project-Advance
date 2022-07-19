<template>
 <!--PLANES-->
 <div class="premium" id="premium">
  <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<h3 class="text-center">
				Servicios Premium
			</h3>
			<div class="row">
				<div class="col-md-4 planes plan1">
					<h3>
						Plan Básico
					</h3>
					<ul>
						<li class="list-item">
							Tiene un limite de crear 5 categorias 
						</li>
						<li class="list-item">
							20 notas por categoria
						</li>
						<li class="list-item">
							con un limite de 200 caracteres
						</li>
					</ul>
				</div>
				<div class="col-md-4 planes plan2">
					<h3>
						Plan Medio
					</h3>
					<ul>
						<li class="list-item">
							Tiene un limite de crear 10 categorias 
						</li>
						<li class="list-item">
							50 notas por categoria
						</li>
						<li class="list-item">
							Con un limite de 400 caracteres
						</li>
					</ul>
				</div>
				<div class="col-md-4 planes plan3">
					<h3>
						Plan VIP
					</h3>
					<ul>
						<li class="list-item">
							Tiene un limite de crear 20 categorias
						</li>
						<li class="list-item">
							10 notas por categorias
						</li>
						<li class="list-item">
							Con un ilimitado número de caracteres
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
 </div>
</template>

<style>
 .premium{
  background-color: rgb(155, 153, 153);
  padding-bottom: 100px;
}
.planes{
  border: 1px solid white;
  border-radius: 20px 20px;
  width: 100%;
  margin: 0px;
  float:center;
}
.plan1{
  background: url(../assets/bronce.jpg);
  font-family: cursive;
  color: black;
}
.plan2{
  background: url(../assets/plata.jpg);
  font-family: cursive;
  color: black;
}
.plan3{
  background: url(../assets/oro.jpg);
  font-family: cursive;
   color: black;
}
</style>