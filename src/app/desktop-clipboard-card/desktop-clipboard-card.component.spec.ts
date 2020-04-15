import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopClipboardCardComponent } from './desktop-clipboard-card.component';

describe('DesktopClipboardCardComponent', () => {
  let component: DesktopClipboardCardComponent;
  let fixture: ComponentFixture<DesktopClipboardCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopClipboardCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopClipboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
