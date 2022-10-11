import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { DostavljacViewComponent } from './dostavljac-view/dostavljac-view.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModificationProfilComponent } from './modification-profil/modification-profil.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PorudzbinaFormComponent } from './porudzbina-form/porudzbina-form.component';
import { PotrosacViewComponent } from './potrosac-view/potrosac-view.component';
import { ProizvodFormComponent } from './proizvod-form/proizvod-form.component';
import { ProizvodInfoViewComponent } from './proizvod-info-view/proizvod-info-view.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'admin-view',component : AdminViewComponent},
  {path:'proizvod-info-view',component : ProizvodInfoViewComponent},
  {path:'modification',component:ModificationProfilComponent},
  {path:'potrosac-view',component:PotrosacViewComponent },
  {path:'dostavljac-view',component:DostavljacViewComponent},
  {path:'proizvod-form',component:ProizvodFormComponent},
  {path:'porudzbina-form',component:PorudzbinaFormComponent},
  {path:'navigation',component : NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
