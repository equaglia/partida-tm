import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaFormComponent } from './partida-form.component';

describe('PartidaFormComponent', () => {
  let component: PartidaFormComponent;
  let fixture: ComponentFixture<PartidaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
