import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro2NotasComponent } from './cadastro2-notas.component';

describe('Cadastro2NotasComponent', () => {
  let component: Cadastro2NotasComponent;
  let fixture: ComponentFixture<Cadastro2NotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadastro2NotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadastro2NotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
