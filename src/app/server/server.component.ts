import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrl: './server.component.css'
  })
export class ServerComponent implements OnInit{

    @Input() id:string = 'Server on stanging -1';
    @Input() status:string = 'DOWN';

    @Output() onAlert = new EventEmitter();

    ngOnInit(): void {}

    public onAlertEvent(e: string){
        this.onAlert.emit(e);
    }
}