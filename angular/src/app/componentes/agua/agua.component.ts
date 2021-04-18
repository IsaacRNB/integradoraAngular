import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.component.html',
  styleUrls: ['./agua.component.css'],
})
export class AguaComponent implements OnInit {

  @ViewChild("myModalInfo", { static: false }) myModalInfo: TemplateRef<any>;
  @ViewChild("myModalInfo2", { static: false }) myModalInfo2: TemplateRef<any>;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  mostrarModalInfo(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  mostrarModalInfo2(content) {
    this.modalService.open(content, { size: 'xl' });
  }


}
