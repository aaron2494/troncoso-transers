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
      title: 'Traslado de personal empresarial',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Transporte seguro y confiable para su equipo de trabajo'
    },
    {
      title: 'Servicio ejecutivo',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Vehículos de lujo para clientes exigentes'
    },
    {
      title: 'Traslados aeropuerto',
      image: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Puntualidad garantizada para sus vuelos'
    },
    {
      title: 'Eventos especiales',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Transporte para bodas, graduaciones y más'
    },
    {
      title: 'Servicio turístico',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Recorridos por la ciudad con comodidad'
    }
  ];
}
