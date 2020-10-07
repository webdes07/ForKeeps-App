import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedAlbumsComponent } from './booked-albums.component';

describe('BookedAlbumsComponent', () => {
  let component: BookedAlbumsComponent;
  let fixture: ComponentFixture<BookedAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
