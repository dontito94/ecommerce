import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSingleComponent } from './side-single.component';

describe('SideSingleComponent', () => {
  let component: SideSingleComponent;
  let fixture: ComponentFixture<SideSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
