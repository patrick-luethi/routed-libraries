import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      loadChildren: () => import('@routed-libraries/non-lazy-routing-lib').then(m => m.NonLazyRoutingLibModule)
    }])
  ]
})
export class TestLazyModule { }
