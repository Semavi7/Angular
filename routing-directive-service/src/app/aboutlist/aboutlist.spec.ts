import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutlist } from './aboutlist';

describe('Aboutlist', () => {
  let component: Aboutlist;
  let fixture: ComponentFixture<Aboutlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
