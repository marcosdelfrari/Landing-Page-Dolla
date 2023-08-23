import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationTvComponent } from './animation-tv.component';

describe('AnimationTvComponent', () => {
  let component: AnimationTvComponent;
  let fixture: ComponentFixture<AnimationTvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationTvComponent]
    });
    fixture = TestBed.createComponent(AnimationTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
