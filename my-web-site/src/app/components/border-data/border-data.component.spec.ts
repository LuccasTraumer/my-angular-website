import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderDataComponent } from './border-data.component';

describe('BorderDataComponent', () => {
  let component: BorderDataComponent;
  let fixture: ComponentFixture<BorderDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
