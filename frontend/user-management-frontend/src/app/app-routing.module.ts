import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' }, // Redireciona para a lista de usuários
    { path: 'users', component: UserListComponent }, // Rota para a listagem de usuários
    { path: 'add', component: UserFormComponent }, // Rota para o formulário de cadastro
    { path: 'edit/:id', component: UserFormComponent } // Rota para editar usuário
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
