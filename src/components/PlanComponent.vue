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
							5 notas por categoria
						</li>
						<li class="list-item">
							Con un limite de 200 caracteres por nota
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
							10 notas por categoria
						</li>
						<li class="list-item">
							Con un limite de 500 caracteres por nota
						</li>
					</ul>
				</div>
				<div class="col-md-4 planes plan3">
					<h3>
						Plan VIP
					</h3>
					<ul>
						<li class="list-item">
							Tiene un limite de crear 15 categorias
						</li>
						<li class="list-item">
							20 notas por categorias
						</li>
						<li class="list-item">
							Con un maximo de 10,000 caracteres por nota
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
  background-color: white;
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
  background: url(../assets/plata.jpg);
  font-family: cursive;
  color: black;
}
.plan2{
  background: url(../assets/plata.jpg);
  font-family: cursive;
  color: black;
}
.plan3{
  background: url(../assets/plata.jpg);
  font-family: cursive;
   color: black;
}
</style>