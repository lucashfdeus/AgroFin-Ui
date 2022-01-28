/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TituloTextoComponent } from './titulo-texto.component';

describe('TituloTextoComponent', () => {
  let component: TituloTextoComponent;
  let fixture: ComponentFixture<TituloTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
