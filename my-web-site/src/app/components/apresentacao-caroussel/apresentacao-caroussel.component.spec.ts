import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoCarousselComponent } from './apresentacao-caroussel.component';

describe('ApresentacaoCarousselComponent', () => {
  let component: ApresentacaoCarousselComponent;
  let fixture: ComponentFixture<ApresentacaoCarousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentacaoCarousselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentacaoCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
