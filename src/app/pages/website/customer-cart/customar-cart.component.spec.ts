import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomarCartComponent } from './customar-cart.component';

describe('CustomarCartComponent', () => {
  let component: CustomarCartComponent;
  let fixture: ComponentFixture<CustomarCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomarCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomarCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
