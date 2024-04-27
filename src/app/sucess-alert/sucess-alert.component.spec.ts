import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessAlertComponent } from './sucess-alert.component';

describe('SucessAlertComponent', () => {
  let component: SucessAlertComponent;
  let fixture: ComponentFixture<SucessAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SucessAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucessAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`verify text inside`, () => {
    let compiled =  fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#messageSucess").textContent).toEqual("This is a success alert with an example link. Give it a click if you like.");
  });
});
