import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postapi } from './postapi';

describe('Postapi', () => {
  let component: Postapi;
  let fixture: ComponentFixture<Postapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
