import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutDropdownComponent } from './without-dropdown.component';

describe('WithoutDropdownComponent', () => {
  let component: WithoutDropdownComponent;
  let fixture: ComponentFixture<WithoutDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
