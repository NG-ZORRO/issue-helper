import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzIssueHelpComponent } from './nz-issue-help.component';

describe('NzIssueHelpComponent', () => {
  let component: NzIssueHelpComponent;
  let fixture: ComponentFixture<NzIssueHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzIssueHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzIssueHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
