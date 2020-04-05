import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardCardComponent } from './clipboard-card.component';

describe('ClipboardCardComponent', () => {
  let component: ClipboardCardComponent;
  let fixture: ComponentFixture<ClipboardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipboardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
