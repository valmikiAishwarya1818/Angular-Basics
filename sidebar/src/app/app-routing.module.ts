import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagesComponent } from './pages/pages.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Pages',component:PagesComponent},
  {path:'Portifolio',component:PortfolioComponent},
  {path:'Contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
