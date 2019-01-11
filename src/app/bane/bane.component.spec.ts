import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaneComponent } from './bane.component';

describe('BaneComponent', () => {
  let component: BaneComponent;
  let fixture: ComponentFixture<BaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
