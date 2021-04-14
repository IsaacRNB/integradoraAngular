import { User2 } from './../../models/user';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestas',
  templateUrl: './prestas.component.html',
  styleUrls: ['./prestas.component.css']
})
export class PrestasComponent implements OnInit {
  user:string;
  user2: User2[] = [];
  idupdate = 0

  constructor(private fb: FormBuilder, private authservice:AuthServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  actualizarUsuario(ngform: NgForm){
    if (this.user2[this.idupdate].usuario == this.user){
    const id = this.user2[this.idupdate].id
    const token = localStorage.getItem('token');
    const data: User2 = 
    {
      "id": id,
      "usuario": ngform.control.value.usuario,
      "token": token,
      "password": ngform.control.value.password,
    }

    if(data.usuario != null && data.password != null){    
    this.authservice.usuarioUpdate(data).subscribe((data:any) =>{
      Swal.fire({
        icon: 'success',
        title: 'Post actualizado exitosamente',
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
    })
  }
else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Necesitas rellenar ambos campos!'
        })
        ngform.resetForm();
  }
}
  }
}
