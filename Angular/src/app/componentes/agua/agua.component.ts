import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  Ws from "@adonisjs/websocket-client"
import { time } from 'node:console';

@Component({
  selector: 'app-agua',
  templateUrl: './agua.component.html',
  styleUrls: ['./agua.component.css'],
})
export class AguaComponent implements OnInit {

  @ViewChild("myModalInfo", { static: false }) myModalInfo: TemplateRef<any>;
  @ViewChild("myModalInfo2", { static: false }) myModalInfo2: TemplateRef<any>;

  constructor(private modalService: NgbModal) { }
  _ws:any;
  chat:any;
  mensaje:string[] = [];
  msg:string;

  ngOnInit(): void {
    this._ws = Ws("ws://localhost:3333", {
      path: "ws"
    });

    this._ws.connect();
    this.chat = this._ws.subscribe("auga");

    this.chat.on("message", (data:any) => {
      console.log(data)
      this.mensaje.push(data)
    })
  }

  mostrarModalInfo(content) {
    this.modalService.open(content, { size: 'xl' });
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

  valueFive()
  {
    this.msg = "on";
    this.chat.emit("message", this.msg);
    this.mensaje.push(this.msg)

  }



  mostrarModalInfo2(content) {
    this.modalService.open(content, { size: 'xl' });
  }


}
