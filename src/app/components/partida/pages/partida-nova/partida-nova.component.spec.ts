import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaNovaComponent } from './partida-nova.component';

describe('PartidaNovaComponent', () => {
  let component: PartidaNovaComponent;
  let fixture: ComponentFixture<PartidaNovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaNovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
