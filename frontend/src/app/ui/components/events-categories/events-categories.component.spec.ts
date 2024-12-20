import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCategoriesComponent } from './events-categories.component';

describe('EventsCategoriesComponent', () => {
  let component: EventsCategoriesComponent;
  let fixture: ComponentFixture<EventsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
