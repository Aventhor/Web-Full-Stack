import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { LibraryComponent } from './library/library.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { NewBookComponent } from './new-book/new-book.component';
import { PanelEditComponent } from './panel-edit/panel-edit.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookDetailComponent,
    NotFoundComponent,
    NavbarComponent,
    ControlPanelComponent,
    LibraryComponent,
    BookSearchComponent,
    NewBookComponent,
    PanelEditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
