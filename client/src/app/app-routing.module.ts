import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { LibraryComponent } from './library/library.component';
import { NewBookComponent } from './new-book/new-book.component';
import { PanelEditComponent } from './panel-edit/panel-edit.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'books/:id', component: BookDetailComponent},
  { path: 'library', component: LibraryComponent, data: {title: 'Библиотека'} },
  { path: 'panel', component: ControlPanelComponent },
  { path: 'panel/new', component: NewBookComponent },
  { path: 'panel/edit/:id', component: PanelEditComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
