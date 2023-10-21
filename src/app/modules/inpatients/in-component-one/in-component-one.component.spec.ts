import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InComponentOneComponent } from './in-component-one.component';

describe('InComponentOneComponent', () => {
  let component: InComponentOneComponent;
  let fixture: ComponentFixture<InComponentOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InComponentOneComponent]
    });
    fixture = TestBed.createComponent(InComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
