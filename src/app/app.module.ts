import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { perfil} from './confperson/confp.component'
import { appaciente } from './pacientes/paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    perfil,
    appaciente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
