import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ProizvodInfoViewComponent } from './proizvod-info-view/proizvod-info-view.component';
import { ModificationProfilComponent } from './modification-profil/modification-profil.component';
import { PorudzbineComponent } from './porudzbine/porudzbine.component';
import { DostavljaciComponent } from './dostavljaci/dostavljaci.component';
import { ProizvodFormComponent } from './proizvod-form/proizvod-form.component';
import { PotrosacViewComponent } from './potrosac-view/potrosac-view.component';
import { DostavljacViewComponent } from './dostavljac-view/dostavljac-view.component';
import { PorudzbinaFormComponent } from './porudzbina-form/porudzbina-form.component';
import { ProizvodiSpliterComponent } from './proizvodi-spliter/proizvodi-spliter.component';
import { TimerComponent } from './timer/timer.component';
import { TimerPotrosacComponent } from './timer-potrosac/timer-potrosac.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DashboardPotrosacComponent } from './dashboard-potrosac/dashboard-potrosac.component';
import { DashboardDostavljacComponent } from './dashboard-dostavljac/dashboard-dostavljac.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdminViewComponent,
    ProizvodInfoViewComponent,
    ModificationProfilComponent,
    PorudzbineComponent,
    DostavljaciComponent,
    ProizvodFormComponent,
    PotrosacViewComponent,
    DostavljacViewComponent,
    PorudzbinaFormComponent,
    ProizvodiSpliterComponent,
    TimerComponent,
    TimerPotrosacComponent,
    NavigationComponent,
    DashboardAdminComponent,
    DashboardPotrosacComponent,
    DashboardDostavljacComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
