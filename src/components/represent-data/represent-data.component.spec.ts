import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentDataComponent } from './represent-data.component';

describe('RepresentDataComponent', () => {
  let component: RepresentDataComponent;
  let fixture: ComponentFixture<RepresentDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepresentDataComponent]
    });
    fixture = TestBed.createComponent(RepresentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
