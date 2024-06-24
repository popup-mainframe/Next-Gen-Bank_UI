import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent1 } from './nav-bar.component';

describe('NavBarComponent1', () => {
  let component: NavBarComponent1;
  let fixture: ComponentFixture<NavBarComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent1]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
