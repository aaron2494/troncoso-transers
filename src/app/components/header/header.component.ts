import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {  RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  // Cerrar menú al hacer scroll (opcional)
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.menuActive) {
      this.menuActive = false;
    }
  }
}
