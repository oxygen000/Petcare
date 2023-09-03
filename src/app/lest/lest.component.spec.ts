import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LestComponent } from './lest.component';

describe('LestComponent', () => {
  let component: LestComponent;
  let fixture: ComponentFixture<LestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LestComponent]
    });
    fixture = TestBed.createComponent(LestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
