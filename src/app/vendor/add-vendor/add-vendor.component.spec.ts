import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorComponent } from './add-vendor.component';

describe('VendorComponent', () => {
  let component: VendorComponent;
  let fixture: ComponentFixture<VendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
