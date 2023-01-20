import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadoresListComponent } from './jogadores-list.component';

describe('JogadoresListComponent', () => {
  let component: JogadoresListComponent;
  let fixture: ComponentFixture<JogadoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogadoresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
