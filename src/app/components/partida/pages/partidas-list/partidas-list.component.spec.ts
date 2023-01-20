import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasListComponent } from './partidas-list.component';

describe('PartidasListComponent', () => {
  let component: PartidasListComponent;
  let fixture: ComponentFixture<PartidasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
