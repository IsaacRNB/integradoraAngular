import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  Ws from "@adonisjs/websocket-client"

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  @ViewChild("myModalInfo", { static: false }) myModalInfo: TemplateRef<any>;
  @ViewChild("myModalInfo2", { static: false }) myModalInfo2: TemplateRef<any>;

  _ws:any;
  chat:any;
  mensaje:string[] = [];
  msg:string;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this._ws = Ws("ws://localhost:3333", {
      path: "ws"
    });

    this._ws.connect();
    this.chat = this._ws.subscribe("auga");

    this.chat.on("message", (data:any) => {
      // console.log(data)
      // this.mensaje.push(data)
      this.test(data)
    })
    this.loadData()
  }

  mostrarModalInfo(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  mostrarModalInfo2(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  loadData(){
    this.single =  [
      {
        "name": "Germany",
        "value": 10
      },
      {
        "name": "USA",
        "value": 5
      },
      {
        "name": "France",
        "value": 4
      }
    ]
  }

  test(data){
    console.log(data)
    this.single = [...this.single,...[{name:"humedad","value":parseInt(data)}]]
    
  }

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  onSelect(event) {
    console.log(event);
  }

}
