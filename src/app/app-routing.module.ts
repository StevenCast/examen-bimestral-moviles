import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'book-list', pathMatch: 'full' },
  { path: 'book-list', loadChildren: () => import('./pages/book-list/book-list.module').then(m => m.BookListPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}