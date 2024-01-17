import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsPageComponent } from './products/pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './products/pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './products/pages/uncommon-page/uncommon-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
