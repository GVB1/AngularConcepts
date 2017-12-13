import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentForInputOutputComponent } from './parent-for-input-output.component';

describe('ParentForInputOutputComponent', () => {
  let component: ParentForInputOutputComponent;
  let fixture: ComponentFixture<ParentForInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentForInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentForInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
