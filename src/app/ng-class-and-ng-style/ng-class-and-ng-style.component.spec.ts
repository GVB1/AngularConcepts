import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassAndNgStyleComponent } from './ng-class-and-ng-style.component';

describe('NgClassAndNgStyleComponent', () => {
  let component: NgClassAndNgStyleComponent;
  let fixture: ComponentFixture<NgClassAndNgStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassAndNgStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassAndNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
