import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoCardsComponent } from './apresentacao-cards.component';

describe('ApresentacaoCardsComponent', () => {
  let component: ApresentacaoCardsComponent;
  let fixture: ComponentFixture<ApresentacaoCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentacaoCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentacaoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
