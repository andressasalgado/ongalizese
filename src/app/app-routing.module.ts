import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ProjetoDetailComponent } from './projeto-detail/projeto-detail.component';
import { EventoFormComponent } from './evento-form/evento-form.component';
import { HomeComponent } from './home/home.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';

const routes: Routes = [{ path: 'novo-usuario', component: NovoUsuarioComponent },
                        { path: 'novo-projeto', component: ProjetoFormComponent},
                        { path: 'detalhe-projeto', component: ProjetoDetailComponent},
                        { path: 'novo-evento', component: EventoFormComponent },
                        { path: 'home', component: HomeComponent },
                        { path: 'detalhe-evento', component: EventoDetailComponent },
                        { path: 'listar-projetos', component: ProjetoListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
