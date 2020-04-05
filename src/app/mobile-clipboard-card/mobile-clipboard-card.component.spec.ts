import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileClipboardCardComponent } from './mobile-clipboard-card.component';

describe('MobileClipboardCardComponent', () => {
  let component: MobileClipboardCardComponent;
  let fixture: ComponentFixture<MobileClipboardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileClipboardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileClipboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
