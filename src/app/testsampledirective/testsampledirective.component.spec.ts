import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsampledirectiveComponent } from './testsampledirective.component';

describe('TestsampledirectiveComponent', () => {
  let component: TestsampledirectiveComponent;
  let fixture: ComponentFixture<TestsampledirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsampledirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsampledirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
