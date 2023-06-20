import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { EventoFormComponent } from './evento-form/evento-form.component';
import { ProjetoDetailComponent } from './projeto-detail/projeto-detail.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    ProjetoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EventoFormComponent,
    HeaderComponent,
    NovoUsuarioComponent,
    EventoDetailComponent,
    ProjetoFormComponent,
    ProjetoDetailComponent,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [EventoDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
