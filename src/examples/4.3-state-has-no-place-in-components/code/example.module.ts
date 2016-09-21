import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './';
import { State } from './state.service';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    State,
  ],
})
export class AppModule {}
