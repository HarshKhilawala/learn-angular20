import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Putdeleteapi } from './putdeleteapi';

describe('Putdeleteapi', () => {
  let component: Putdeleteapi;
  let fixture: ComponentFixture<Putdeleteapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Putdeleteapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Putdeleteapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
