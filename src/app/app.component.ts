import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { VehiculosComponent } from "./components/vehiculos/vehiculos.component";
import { RazonesComponent } from "./components/razones/razones.component";
import { OpinionesComponent } from "./components/opiniones/opiniones.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ServiciosComponent, NosotrosComponent, VehiculosComponent, RazonesComponent, OpinionesComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {}
  ngOnInit() {
    this.title.setTitle('Troncoso transfers- Sur de Argentina | Empresa troncoso transfers');
    this.meta.addTags([
      { name: 'description', content: 'Empresa líder en transporte de pasajeros en combis por el sur de Argentina. Servicios confiables y rutas cubiertas en toda la Patagonia.' },
      { name: 'keywords', content: 'transporte combis, pasajeros sur argentina, viajes patagonia, combis patagónicas, transporte terrestre argentina' },
      { name: 'og:title', content: 'Transporte en Combis - Sur de Argentina | Empresa troncoso transfers' },
      { name: 'og:description', content: 'Servicios de transporte en combis por toda la Patagonia Argentina' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'es_AR' }
    ]);
  }
}
