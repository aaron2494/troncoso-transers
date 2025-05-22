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
      title: 'MINI BUS <br>MERCEDES SPRINTER',
      description: '15 Y 19 pasajeros',
      image: '/assets/SPRINTERMOBILE.png',
      animationClass: 'slide-in-left'
    },
    {
      title: 'MINI VAN <br>MERCEDES VITO ',
      description: '6 pasajeros',
      image: '/assets/VITOOmobile.png',
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
