import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vehiculos',
  imports: [NgFor,CommonModule],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.scss'
})
export class VehiculosComponent {
  vehicles = [
    {
      title: 'Vehículo Ejecutivo',
      description: 'Comodidad y elegancia para su traslado empresarial',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      animationClass: 'slide-in-left'
    },
    {
      title: 'Vehículo Premium',
      description: 'Lujo y confort para experiencias exclusivas',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      animationClass: 'slide-in-right'
    }
  ];
  isVisible = false;
  private scrollListener: (() => void) | undefined;

  constructor() {
    if (typeof window !== 'undefined') {
      this.scrollListener = () => this.checkVisibility();
      window.addEventListener('scroll', this.scrollListener, { passive: true });
      this.checkVisibility(); // Verificar al cargar
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined' && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  checkVisibility() {
    const element = document.querySelector('.vehicle-section');
    if (element) {
      const rect = element.getBoundingClientRect();
      // Ajustado para que la animación comience más tarde (80% del viewport)
      this.isVisible = rect.top < window.innerHeight * 0.6;
    }
  }
}
