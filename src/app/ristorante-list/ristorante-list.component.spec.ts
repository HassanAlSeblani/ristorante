import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RistoranteListComponent } from './ristorante-list.component';

describe('RistoranteListComponent', () => {
  let component: RistoranteListComponent;
  let fixture: ComponentFixture<RistoranteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RistoranteListComponent]
    });
    fixture = TestBed.createComponent(RistoranteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
