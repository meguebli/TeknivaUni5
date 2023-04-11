import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordFactureComponent } from './dashbord-facture/dashbord-facture.component';
import { GestionFactureComponent } from './gestion-facture/gestion-facture.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { GestionArticleComponent } from './gestion-article/gestion-article.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordFactureComponent,
    GestionFactureComponent,
    GestionClientComponent,
    GestionArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
