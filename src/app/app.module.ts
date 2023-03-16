import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ConfigListComponent } from './config-list/config-list.component';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { PruebasListComponent } from './pruebas-list/pruebas-list.component';
import { Routes } from '@angular/router';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'config-list', component: ConfigListComponent},
      {path: 'pacientes-list', component: PacientesListComponent},
      {path: 'consulta-list', component: ConsultaListComponent},
      {path: 'pruebas-list', component: PruebasListComponent},
      {path: 'list-user', component: ListUserComponent},
      {path: 'edit-user', component: EditUserComponent},
      {path: 'add-user', component: AddUserComponent},
      {path: '', redirectTo: '/config-list', pathMatch: 'full'},
      {path: '', redirectTo: '/pruebas-list', pathMatch: 'full'},
      {path: '', redirectTo: '/consulta-list', pathMatch: 'full'},
      {path: '', redirectTo: '/terapeuta-list', pathMatch: 'full'},
      {path: '', redirectTo: '/pacientes-list', pathMatch: 'full'},


];

@NgModule({
  declarations: [
    AppComponent,
    ConfigListComponent,
    PacientesListComponent,
    ListUserComponent,
    ConsultaListComponent,
    PruebasListComponent,
    EditUserComponent,
    AddUserComponent,
    ListUserComponent,
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent,ListUserComponent]
})
export class AppModule { }