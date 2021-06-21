import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartzCronEditorComponent } from './quartz-cron-editor.component';

describe('CronEditorComponent', () => {
  let component: QuartzCronEditorComponent;
  let fixture: ComponentFixture<QuartzCronEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuartzCronEditorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartzCronEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
