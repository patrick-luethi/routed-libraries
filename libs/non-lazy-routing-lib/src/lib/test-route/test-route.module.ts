import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRouteComponent } from './test-route.component';



@NgModule({
  declarations: [TestRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: TestRouteComponent
    }])
  ]
})
export class TestRouteModule { }
