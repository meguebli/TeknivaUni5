import { GestionFactureComponent } from './gestion-facture/gestion-facture.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { GestionArticleComponent } from './gestion-article/gestion-article.component';
import { DashbordFactureComponent } from './dashbord-facture/dashbord-facture.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: DashbordFactureComponent},
  {path:'article', component: GestionArticleComponent},
  {path:'client', component: GestionClientComponent},
  {path:'facture', component: GestionFactureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
