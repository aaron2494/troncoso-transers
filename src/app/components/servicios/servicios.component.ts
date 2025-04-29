import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {
  services = [
    {
      title: 'Traslado a <strong>eventos empresariales o sociales</strong> ',
      image: '/assets/Foto1.png',
    },
    {
      title: 'Traslado a <strong>Aeropuertos y Hoteles</strong> ',
      image:'/assets/Foto2.png',
    },
    {
      title: '<strong>City Tours:</strong> turismo o paseos ',
      image: '/assets/Foto3.png',
    },
    {
      title: 'Traslado de <strong>corta o larga distancia</strong> ',
      image:'/assets/Foto4.png',
    },
    {
      title: 'Traslados <strong>ejecutivos VIP</strong> ',
      image:'/assets/Foto5.png',
      description: 'Recorridos por la ciudad con comodidad'
    },
    {
      title: 'Traslados <strong>escolares</strong> ',
      image:'/assets/Foto6.png',
      description: 'Recorridos por la ciudad con comodidad'
    }
  ];
  
}
