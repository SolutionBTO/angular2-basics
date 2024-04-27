import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServersComponent } from './servers.component';
import { ServerComponent } from '../server/server.component';
import { ModalComponent } from '../app-modal/app-modal.component';


describe('ServersComponent', () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServersComponent, ServerComponent, ModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`verify text inside`, () => {
    let compiled =  fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#addServer").textContent).toEqual("Add Server");
  });
  
});
