import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpComponentOneComponent } from './op-component-one.component';

describe('OpComponentOneComponent', () => {
  let component: OpComponentOneComponent;
  let fixture: ComponentFixture<OpComponentOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpComponentOneComponent]
    });
    fixture = TestBed.createComponent(OpComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
