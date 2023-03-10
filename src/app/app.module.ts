import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { perfil} from './confperson/confp.component'
import { appaciente } from './pacientes/paciente.component';
import { appterapeuta } from './Terapeuta/terapeuta.component';
import { appConsulta } from './Consulta/consulta.component';
import { apprueba } from './pruebas/prueba.component';
@NgModule({
  declarations: [
    AppComponent,
    perfil,
    appaciente,
    appterapeuta,
    appConsulta,
    apprueba
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
