import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { perfil} from './confperson/confp.component'
import { appaciente } from './pacientes/paciente.component';
import { appterapeuta } from './Terapeuta/terapeuta.component';
import { appConsulta } from './Consulta/consulta.component';
import { apprueba } from './pruebas/prueba.component';
import { ConfigListComponent } from './config-list/config-list.component';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { PruebasListComponent } from './pruebas-list/pruebas-list.component';
import { TerapeutaListComponent } from './terapeuta-list/terapeuta-list.component';
@NgModule({
  declarations: [
    AppComponent,
    perfil,
    appaciente,
    appterapeuta,
    appConsulta,
    apprueba,
    ConfigListComponent,
    ConsultaListComponent,
    PacientesListComponent,
    PruebasListComponent,
    TerapeutaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
