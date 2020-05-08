import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingHelpComponent } from './setting-help.component';

describe('SettingHelpComponent', () => {
  let component: SettingHelpComponent;
  let fixture: ComponentFixture<SettingHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
