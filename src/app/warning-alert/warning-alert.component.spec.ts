import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WarningAlertComponent } from './warning-alert.component';

describe('WarningAlertComponent', () => {
  let component: WarningAlertComponent;
  let fixture: ComponentFixture<WarningAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarningAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`verify text inside`, () => {
    let compiled =  fixture.debugElement.nativeElement;
    expect(compiled.querySelector("#messageWarning").textContent).toEqual(component.textContent);
  });
  
});
