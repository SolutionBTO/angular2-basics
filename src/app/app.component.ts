import { Component, OnInit, ViewChild } from '@angular/core';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { ServersComponent } from './servers/servers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular2-basics';

  @ViewChild("appWarningAlert") warningAlert: WarningAlertComponent;
  @ViewChild("appSucessAlert") sucessAlert: SucessAlertComponent;
  @ViewChild("appServers") appServers: ServersComponent;

  constructor(){}

  ngOnInit(): void {}
}
