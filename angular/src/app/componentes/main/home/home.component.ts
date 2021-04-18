import { Component, OnInit } from '@angular/core';
import { Perro } from 'src/app/models/Perro';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { PerroService } from 'src/app/services/perro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  perros: Perro[] = []

  constructor(public auth: AuthServiceService, public perroService: PerroService) { }

  ngOnInit(): void {
    
    this.perroService.getPerro().subscribe(data => { this.perros = data["data"]; })

  }

}
