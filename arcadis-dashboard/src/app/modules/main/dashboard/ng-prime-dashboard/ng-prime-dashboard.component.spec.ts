import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPrimeDashboardComponent } from './ng-prime-dashboard.component';

describe('NgPrimeDashboardComponent', () => {
  let component: NgPrimeDashboardComponent;
  let fixture: ComponentFixture<NgPrimeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgPrimeDashboardComponent]
    });
    fixture = TestBed.createComponent(NgPrimeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
