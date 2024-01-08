import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsCatalogComponent } from './rooms-catalog.component';

describe('RoomsCatalogComponent', () => {
  let component: RoomsCatalogComponent;
  let fixture: ComponentFixture<RoomsCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
