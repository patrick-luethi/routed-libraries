import { LazyRoutingLibModule } from '@routed-libraries/lazy-routing-lib';
import { TestLazyModule } from './test-lazy/test-lazy.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    TestLazyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
