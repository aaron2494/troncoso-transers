import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';

// Definimos un tipo para los nombres de los controles
type FormControlNames = 
  'nombre' | 'email' | 'celular' | 'fechaSalida' | 
  'fechaRegreso' | 'origen' | 'destino' | 'pasajeros' | 'comentarios';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      fechaSalida: ['', Validators.required],
      fechaRegreso: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      pasajeros: ['', [Validators.required, Validators.min(1)]],
      comentarios: ['']
    });
  }

  // Método seguro para acceder a los controles
  getControl(controlName: FormControlNames): AbstractControl {
    return this.contactForm.get(controlName) as AbstractControl;
  }

  // Método para verificar errores
  hasError(controlName: FormControlNames, errorType: string): boolean {
    const control = this.getControl(controlName);
    return control?.hasError(errorType) && (control?.touched || this.submitted);
  }

  // Método para obtener mensajes de error
  getErrorMessage(controlName: FormControlNames): string {
    const control = this.getControl(controlName);
    
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    
    if (control?.hasError('email')) {
      return 'Ingresa un email válido';
    }
    
    if (control?.hasError('minlength')) {
      return `Mínimo ${control.getError('minlength').requiredLength} caracteres`;
    }
    
    if (control?.hasError('pattern')) {
      return 'Formato incorrecto (10-15 dígitos)';
    }
    
    if (control?.hasError('min')) {
      return `Mínimo ${control.getError('min').min} pasajero`;
    }
    
    return '';
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;
    
    // Ejemplo de envío al backend
    this.http.post('https://tu-backend.com/api/contacto', this.contactForm.value)
      .subscribe({
        next: () => {
          this.isLoading = false;
          // Resetear formulario después de enviar
          this.contactForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error al enviar:', error);
        }
      });
  }
}