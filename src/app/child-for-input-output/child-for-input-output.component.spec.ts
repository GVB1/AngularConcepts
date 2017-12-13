import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildForInputOutputComponent } from './child-for-input-output.component';

describe('ChildForInputOutputComponent', () => {
  let component: ChildForInputOutputComponent;
  let fixture: ComponentFixture<ChildForInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildForInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildForInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
