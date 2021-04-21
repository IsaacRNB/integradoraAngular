import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  Ws from "@adonisjs/websocket-client"

@Component({
  selector: 'app-croquetas',
  templateUrl: './croquetas.component.html',
  styleUrls: ['./croquetas.component.css']
})
export class CroquetasComponent implements OnInit {

  _ws:any;
  chat:any;
  mensaje:string[] = [];
  msg:string;

  @ViewChild("myModalInfo", { static: false }) myModalInfo: TemplateRef<any>;
  @ViewChild("myModalInfo2", { static: false }) myModalInfo2: TemplateRef<any>;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this._ws = Ws("ws://localhost:3333", {
      path: "ws"
    });

    this._ws.connect();
    this.chat = this._ws.subscribe("croquetas");

    this.chat.on("message", (data:any) => {
      this.mensaje.push(data)
    })
  }

  valueOne()
  {
    this.msg = "1";
    this.chat.emit("message", this.msg);
    this.mensaje.push(this.msg)

  }

  valueTwo()
  {
    this.msg = "2";
    this.chat.emit("message", this.msg);
    this.mensaje.push(this.msg)
  }

  valueThree()
  {
    this.msg = "3";
    this.chat.emit("message", this.msg);
    this.mensaje.push(this.msg)
  }


  valueFour()
  {
    this.msg = "4";
    this.chat.emit("message", this.msg);
    this.mensaje.push(this.msg)

  }

  mostrarModalInfo() {
    this.modalService.open(this.myModalInfo);
  }

  mostrarModalInfo2(content) {
    this.modalService.open(content, { size: 'xl' });
  }


}
