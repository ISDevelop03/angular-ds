import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { DesignSystemModule } from '../../projects/design-system/src/lib/design-system.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: DemoPageComponent }
    ]),
    DesignSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 