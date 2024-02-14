import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrl: './app-modal.component.css'
})
export class ModalComponent implements OnInit, AfterViewInit{
  @Input('message') message:string;

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}
