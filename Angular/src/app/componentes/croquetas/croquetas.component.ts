import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-croquetas',
  templateUrl: './croquetas.component.html',
  styleUrls: ['./croquetas.component.css']
})
export class CroquetasComponent implements OnInit {

  @ViewChild("myModalInfo", { static: false }) myModalInfo: TemplateRef<any>;
  @ViewChild("myModalInfo2", { static: false }) myModalInfo2: TemplateRef<any>;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }


  mostrarModalInfo() {
    this.modalService.open(this.myModalInfo);
  }

  mostrarModalInfo2(content) {
    this.modalService.open(content, { size: 'xl' });
  }

}
