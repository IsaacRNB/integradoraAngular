import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Perro } from 'src/app/models/Perro';
import { User } from 'src/app/models/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-dog',
  templateUrl: './register-dog.component.html',
  styleUrls: ['./register-dog.component.css']
})
export class RegisterDogComponent implements OnInit {


  perro = new Perro()
  usuario = new User()

  selectedFile: File = null;
  
  constructor(private fb: FormBuilder,
    private authService: AuthServiceService,
     private usuarioService: UsuarioService,
     private router:Router) {

}

  ngOnInit(): void {
  }

  cargarImagen(ngform: NgForm): void {
    const data: Perro = {
      "nombre": ngform.control.value.nombrePerro
    }
    const formData = new FormData();
    if (this.selectedFile) {
  
      formData.append('foto', this.selectedFile, this.selectedFile.name);
      console.log(data)
  
      if (data.nombre != null) {
        this.authService.registrarPerro(formData, data.nombre).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title: 'Perro actualizado exitosamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/home']);
  
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
  

}
