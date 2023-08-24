import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetreiroComponent } from './letreiro.component';

describe('LetreiroComponent', () => {
  let component: LetreiroComponent;
  let fixture: ComponentFixture<LetreiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetreiroComponent]
    });
    fixture = TestBed.createComponent(LetreiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
