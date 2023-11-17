import { Component, Input } from '@angular/core';
import { Coche } from 'src/app/models/Coche';
@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrls: ['./hijocoche.component.css'],
})
export class HijococheComponent {
  @Input() car!: Coche;
  public mensaje!: string;
  constructor() {
    //Cuando recibimos elementos input no podemos utilizarlos dentro del constructor
  }

  //metodo que devuelve true o false si coche apagado o encendido
  comprobarEstado(): boolean {
    if (this.car.estado == false) {
      this.mensaje = 'El coche esta apagado';
      this.car.velocidad = 0;
      return false;
    } else {
      this.mensaje = 'El coche esta encendido';
      return true;
    }
  }

  //Tendremos un metodo para encender el coche
  encenderCoche(): void {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  //Tendremos un metodo para acelerar el coche

  acelerarCoche(): void {
    if (this.comprobarEstado() == false) {
      alert('Coche apagado donde vas Julian');
    } else {
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
    }
  }
}
