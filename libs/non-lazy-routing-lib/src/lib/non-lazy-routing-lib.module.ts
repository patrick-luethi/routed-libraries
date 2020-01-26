import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRouteModule } from './test-route/test-route.module';

@NgModule({
  imports: [CommonModule, TestRouteModule]
})
export class NonLazyRoutingLibModule {}
