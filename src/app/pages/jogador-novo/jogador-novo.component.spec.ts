import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorNovoComponent } from './jogador-novo.component';

describe('JogadorNovoComponent', () => {
  let component: JogadorNovoComponent;
  let fixture: ComponentFixture<JogadorNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogadorNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
