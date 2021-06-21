import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { QuartzCronEditorModule } from 'projects/quartz-cron-editor/src/lib/quartz-cron-editor.module';
// import { QuartzCronEditorModule } from 'quartz-cron-editor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CommonModule, QuartzCronEditorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
