import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RistoranteStatsComponent } from './ristorante-stats.component';

describe('RistoranteStatsComponent', () => {
  let component: RistoranteStatsComponent;
  let fixture: ComponentFixture<RistoranteStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RistoranteStatsComponent]
    });
    fixture = TestBed.createComponent(RistoranteStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
