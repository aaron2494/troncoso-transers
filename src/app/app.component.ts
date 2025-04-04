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




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ServiciosComponent, NosotrosComponent, VehiculosComponent, RazonesComponent, OpinionesComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'combis-apa';
}
