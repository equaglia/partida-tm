import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPartidaFormComponent } from './games-partida-form.component';

describe('GamesPartidaFormComponent', () => {
  let component: GamesPartidaFormComponent;
  let fixture: ComponentFixture<GamesPartidaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesPartidaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesPartidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
