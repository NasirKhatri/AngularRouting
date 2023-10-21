import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InComponentTwoComponent } from './in-component-two.component';

describe('InComponentTwoComponent', () => {
  let component: InComponentTwoComponent;
  let fixture: ComponentFixture<InComponentTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InComponentTwoComponent]
    });
    fixture = TestBed.createComponent(InComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
