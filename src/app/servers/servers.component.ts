import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../app-modal/app-modal.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit, AfterContentInit{

  @ViewChild('appModal') appModal : ModalComponent;
  
  ngOnInit(): void {}
  ngAfterContentInit(): void {
    setTimeout(() => {
      this.disabledBtnServer = !this.disabledBtnServer;
    }, 5000);
  }

  message:string;
  disabledBtnServer: boolean = true;

  public alerta(message:string){
    this.message = message;
  }
}
