import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { vehiculo } from 'src/app/domain/vehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class vehiculoComponent {

  vehiculo: vehiculo = new vehiculo();//para pasar la informacion por un dominidio creamos uno y especificamos las variables

  ///vehiculoFire:any;

  constructor(private VehiculoService: VehiculoService,
  //private personaService:PersonaService,//llamamos a nuestro servicio creado por nosotros y le decimos q es de tipos vehiculoServicio
  private router:Router )///agregamos para realizar la conexion con la base local y los servicios)
  {

    let params=this.router.getCurrentNavigation()?.extras.queryParams;
    if(params)
    {
      console.log(params)
      this.vehiculo=new vehiculo()
      this.vehiculo=params['vehiculo']
    }
  }
  guardar(){ //fire actualizado
    console.log(this.vehiculo)
    //this.vehiculoService.save(this.vehiculo)//llamamos a la clase creada en el serviciio,, es era el codigo para realizar la conexionmmediante la fierbase
    //this.vehiculo = new vehiculo();
    //codigo para guardar en la base de datos
    if(!isNaN(Number(this.vehiculo.cedula)) && this.vehiculo.cedula.length === 10){

     // this.personaService.save(this.vehiculo).subscribe(data => {
        //console.log("Resultado WS SAVE", data);
        this.router.navigate(["paginas/listUsuarios"])
     // });
      this.vehiculo=new vehiculo()
      this.router.navigate(["paginas/listUsuarios"])
    }
    else{
      alert("Nro. Cedula Incorreta")
    }
  }

  actualizar(){
    console.log(this.vehiculo)
    this.vehiculo = new vehiculo();

    // Aquí puedes realizar cualquier acción con los datos del formulario, como enviarlos a través de una API
  
  }

  modificar(){ //fire actualizado
    console.log(this.vehiculo)

    if(!isNaN(Number(this.vehiculo.cedula)) && this.vehiculo.cedula.length === 10){
     // this.personaService.save(this.vehiculo).subscribe(data => {
        console.log("Resultado WS SAVE", data);
        this.router.navigate(["paginas/listUsuarios"])
      //});
      this.vehiculo=new vehiculo()
    }
    else{
      alert("Erro Nro. Cedula Incorrecta")
    }
  }
  

}