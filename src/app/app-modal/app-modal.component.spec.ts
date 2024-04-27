import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './app-modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`verify texts inside in elements`, () => {
    component.message = "Hello World";
    fixture.detectChanges();
    
    let compiled =  fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#messageModal").textContent).toEqual(component.message);
    expect(compiled.querySelector("#btnClose").textContent).toEqual("Close");
    expect(compiled.querySelector("#lblModalSample").textContent).toEqual("Alert");
  });
});
