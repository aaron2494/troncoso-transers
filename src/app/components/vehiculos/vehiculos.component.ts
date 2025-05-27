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
      imageDesktop: '/assets/sprinterpc.png',
      imageMobile: '/assets/SPRINTERMOBILE.png',
      animationClass: 'slide-in-left'
    },
    {
      title: 'MINI VAN <br>MERCEDES VITO',
      description: '6 pasajeros',
      imageDesktop: '/assets/vitopc.png',
      imageMobile: '/assets/VITOOmobile.png',
      animationClass: 'slide-in-right'
    }
  ];

  isDesktop = true;
  isVisible = false;
  private scrollListener: (() => void) | undefined;
  private resizeListener: (() => void) | undefined;

  constructor() {
    if (typeof window !== 'undefined') {
      this.updateDeviceType();
      this.scrollListener = () => this.checkVisibility();
      this.resizeListener = () => this.updateDeviceType();

      window.addEventListener('scroll', this.scrollListener, { passive: true });
      window.addEventListener('resize', this.resizeListener, { passive: true });

      this.checkVisibility();
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      if (this.scrollListener) window.removeEventListener('scroll', this.scrollListener);
      if (this.resizeListener) window.removeEventListener('resize', this.resizeListener);
    }
  }

  checkVisibility() {
    const element = document.querySelector('.vehicle-section');
    if (element) {
      const rect = element.getBoundingClientRect();
      this.isVisible = rect.top < window.innerHeight * 0.6;
    }
  }

  updateDeviceType() {
    this.isDesktop = window.innerWidth >= 768;
  }

  getImage(vehicle: any): string {
    return this.isDesktop ? vehicle.imageDesktop : vehicle.imageMobile;
  }
}