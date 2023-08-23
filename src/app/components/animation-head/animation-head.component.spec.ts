import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationHeadComponent } from './animation-head.component';

describe('AnimationHeadComponent', () => {
  let component: AnimationHeadComponent;
  let fixture: ComponentFixture<AnimationHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationHeadComponent]
    });
    fixture = TestBed.createComponent(AnimationHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
