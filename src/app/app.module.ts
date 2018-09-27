import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {RouterModule,Router} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardViewComponent } from './card-view/card-view.component';
import { CardHttpService } from './card-http.service';
import {HttpClientModule} from '@angular/common/http';

import {HttpClient} from '@angular/common/http';
import { HouseViewComponent } from './house-view/house-view.component';
import { BookViewComponent } from './book-view/book-view.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardViewComponent,
    HouseViewComponent,
    BookViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'card/:charId',component:CardViewComponent},
      {path:'house/:charId',component:HouseViewComponent},
      {path:'book/:charId',component:BookViewComponent}
    ])
  ],
  providers: [CardHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
