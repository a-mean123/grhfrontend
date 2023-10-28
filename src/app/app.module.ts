import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { DepartementComponent } from './dashboard/departement/departement.component';
import { ClientComponent } from './dashboard/client/client.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { AjoutComponent } from './dashboard/departement/ajout/ajout.component';
import { ListdepComponent } from './dashboard/departement/listdep/listdep.component';
import { UpdatedepComponent } from './dashboard/departement/updatedep/updatedep.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AjoutclientComponent } from './dashboard/client/ajoutclient/ajoutclient.component';
import { ListclientComponent } from './dashboard/client/listclient/listclient.component';
import { UpdateclientComponent } from './dashboard/client/updateclient/updateclient.component';
import { AjoutemployeeComponent } from './dashboard/employee/ajoutemployee/ajoutemployee.component';
import { ListemployeeComponent } from './dashboard/employee/listemployee/listemployee.component';
import { UpdateemployeeComponent } from './dashboard/employee/updateemployee/updateemployee.component';
import { ProjetComponent } from './dashboard/projet/projet.component';
import { AjoutprojetComponent } from './dashboard/projet/ajoutprojet/ajoutprojet.component';
import { ListprojetComponent } from './dashboard/projet/listprojet/listprojet.component';
import { EditprojetComponent } from './dashboard/projet/editprojet/editprojet.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DepartementComponent,
    ClientComponent,
    EmployeeComponent,
    AjoutComponent,
    ListdepComponent,
    UpdatedepComponent,
    AjoutclientComponent,
    ListclientComponent,
    UpdateclientComponent,
    AjoutemployeeComponent,
    ListemployeeComponent,
    UpdateemployeeComponent,
    ProjetComponent,
    AjoutprojetComponent,
    ListprojetComponent,
    EditprojetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
