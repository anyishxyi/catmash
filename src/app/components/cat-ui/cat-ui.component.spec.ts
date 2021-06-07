import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatUiComponent } from './cat-ui.component';

describe('CatUiComponent', () => {
  let component: CatUiComponent;
  let fixture: ComponentFixture<CatUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
