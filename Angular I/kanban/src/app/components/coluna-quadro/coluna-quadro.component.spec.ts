import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaQuadroComponent } from './coluna-quadro.component';

describe('ColunaQuadroComponent', () => {
  let component: ColunaQuadroComponent;
  let fixture: ComponentFixture<ColunaQuadroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColunaQuadroComponent]
    });
    fixture = TestBed.createComponent(ColunaQuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
