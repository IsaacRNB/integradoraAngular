import { PerroService } from './../../services/perro.service';
import { UsuarioService } from './../../services/usuario.service';
import { User } from './../../models/user';
import { Perro } from 'src/app/models/Perro';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestas',
  templateUrl: './prestas.component.html',
  styleUrls: ['./prestas.component.css']
})
export class PrestasComponent implements OnInit {

  perro = new Perro()
  usuario = new User()

  idupdate = 18

  perro1: Perro[] = [];


  selectedFile: File = null;

  constructor(private fb: FormBuilder,
             private perroService: PerroService,
              private usuarioService: UsuarioService,
              private router:Router) {

  }

  ngOnInit(): void {

  }

  cargarImagen(ngform: NgForm): void {
    const data: Perro = {
      "nombre": ngform.control.value.nombrePerro,
    }
    const formData = new FormData();
    if (this.selectedFile) {
  
      formData.append('foto', this.selectedFile, this.selectedFile.name);
      console.log(data)
  
      if (data.nombre != null) {
        this.perroService.actualizarPerro(formData, data.nombre).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title: 'Perro actualizado exitosamente',
            showConfirmButton: false,
            timer: 1500
          })
  
          ngform.resetForm();
        }, error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocurrio algun error!',
          })
        });
      }
    } else {
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
      console.log(this.selectedFile)
    }
  }

  actualizarUsuario(ngform: NgForm) {
    const data: User =
    {
      "usuario": ngform.control.value.nombreUsuario,
      "password": ngform.control.value.password
    }

    if (data.usuario != null && data.password != null) {
      this.usuarioService.actualizarUsuario(data).subscribe((data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Usuario actualizado exitosamente',
          showConfirmButton: false,
          timer: 1500
        })
        ngform.resetForm();
      })
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
}


