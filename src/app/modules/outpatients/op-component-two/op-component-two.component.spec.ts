import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpComponentTwoComponent } from './op-component-two.component';

describe('OpComponentTwoComponent', () => {
  let component: OpComponentTwoComponent;
  let fixture: ComponentFixture<OpComponentTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpComponentTwoComponent]
    });
    fixture = TestBed.createComponent(OpComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
