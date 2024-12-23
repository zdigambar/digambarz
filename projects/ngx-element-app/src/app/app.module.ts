import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* import { NgxElementModule } from 'ngx-element'; */
import { lazyConfig } from './lazy-config';
import { NgxElementModule } from 'projects/ngx-element/src/public-api';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgxElementModule.forRoot(lazyConfig)
  ],
  providers: []
})
export class AppModule {
  ngDoBootstrap() {}
}
