import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { QuartzCronEditorComponent } from './quartz-cron-editor.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
  declarations: [QuartzCronEditorComponent, TimePickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [QuartzCronEditorComponent]
})
export class QuartzCronEditorModule { }
