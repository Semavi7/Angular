import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notfount } from './notfount';

describe('Notfount', () => {
  let component: Notfount;
  let fixture: ComponentFixture<Notfount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notfount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notfount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
