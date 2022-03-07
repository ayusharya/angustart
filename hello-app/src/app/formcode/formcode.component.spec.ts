import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcodeComponent } from './formcode.component';

describe('FormcodeComponent', () => {
  let component: FormcodeComponent;
  let fixture: ComponentFixture<FormcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
