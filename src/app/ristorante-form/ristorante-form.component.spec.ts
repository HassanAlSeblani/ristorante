import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RistoranteFormComponent } from './ristorante-form.component';

describe('RistoranteFormComponent', () => {
  let component: RistoranteFormComponent;
  let fixture: ComponentFixture<RistoranteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RistoranteFormComponent]
    });
    fixture = TestBed.createComponent(RistoranteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
