import { Perro2 } from './../../models/Perro';
import { PerroService } from './../../services/perro.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Perro } from 'src/app/models/Perro';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-dog',
  templateUrl: './register-dog.component.html',
  styleUrls: ['./register-dog.component.css']
})
export class RegisterDogComponent implements OnInit {
  perro = new Perro()
  public usuario;
  selectedFile: File = null;

  constructor(
    private perroService: PerroService,
    private router: Router) {
    //console.log(sessionStorage.getItem('id'))
  }

  ngOnInit(): void { }

  cargarImagen(ngform: NgForm): void {
    const data: Perro2 =
    {
      "nombre": ngform.control.value.nombrePerro
    }
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('foto', this.selectedFile, this.selectedFile.name);
      //console.log(data)
      if (data.nombre != null) {
        this.perroService.registrarPerro(formData, data.nombre).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title: 'Perro registrado exitosamente',
            showConfirmButton: false,
            timer: 1500
          })
          sessionStorage.removeItem('id');
          localStorage.removeItem('token')
          this.router.navigate(['/login']);
          ngform.resetForm();
        }, error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocurrio algun error!',
          })
        });
      }
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Necesitas rellenar ambos campos!'
      })
      ngform.resetForm();
    }
  }

  setFile($event: Event): void {
    // @ts-ignore
    if ($event.target.files[0]) {
      // @ts-ignore
      this.selectedFile = $event.target.files[0];
      // console.log(this.selectedFile)
    }
  }
}