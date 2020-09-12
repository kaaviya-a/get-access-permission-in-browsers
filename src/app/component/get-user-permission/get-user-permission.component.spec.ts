import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserPermissionComponent } from './get-user-permission.component';

describe('GetUserPermissionComponent', () => {
  let component: GetUserPermissionComponent;
  let fixture: ComponentFixture<GetUserPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUserPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
