import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomicalDataItemComponent } from './anatomical-data-item.component';

describe('AnatomicalDataItemComponent', () => {
  let component: AnatomicalDataItemComponent;
  let fixture: ComponentFixture<AnatomicalDataItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnatomicalDataItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnatomicalDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
