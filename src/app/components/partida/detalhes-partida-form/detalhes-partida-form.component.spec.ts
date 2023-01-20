import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPartidaFormComponent } from './detalhes-partida-form.component';

describe('DetalhesPartidaFormComponent', () => {
  let component: DetalhesPartidaFormComponent;
  let fixture: ComponentFixture<DetalhesPartidaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesPartidaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPartidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
