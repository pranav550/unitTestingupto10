import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EventTestComponent } from './event-test.component';

describe('EventTestComponent', () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;
  let de:DebugElement;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Add Click button is clicked', ()=>{
    const h1 = de.query(By.css('h1'));
    const btn = de.query(By.css('#btnAddClick'));
    btn.triggerEventHandler('click',{});
    fixture.detectChanges();
    console.log(h1.nativeElement.innertext)
    expect(component.countClicks).toEqual(parseInt(h1.nativeElement.innerText));
  })
});
