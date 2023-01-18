import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomicalDataListComponent } from './anatomical-data-list.component';

describe('AnatomicalDataListComponent', () => {
  let component: AnatomicalDataListComponent;
  let fixture: ComponentFixture<AnatomicalDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnatomicalDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnatomicalDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
