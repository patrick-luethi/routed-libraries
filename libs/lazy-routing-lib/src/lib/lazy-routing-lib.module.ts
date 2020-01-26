import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      loadChildren: () => import('./test-route/test-route.module').then(m => m.TestRouteModule)
    }])
  ]
})
export class LazyRoutingLibModule {}
