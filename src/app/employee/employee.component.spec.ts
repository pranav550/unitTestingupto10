import { AuthenticationService } from './../authentication.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;
  let h1:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers:[AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.inject(AuthenticationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should assert check authentication has been called', ()=>{
     spyOn(authService, 'checkAuthentication').and.returnValue(true);
     component.getSalarySlip();
     fixture.detectChanges();
     console.log(component.salSlip)
     expect(component.salSlip).toEqual('Salary Slip');
     expect(authService.checkAuthentication).toHaveBeenCalled();
   })
   it('should assert the value of h1',()=>{
     component.getSalarySlip();
     fixture.detectChanges();
     console.log(h1.textContent)
     expect(h1.textContent).toBe(component.salSlip);
   })

});
