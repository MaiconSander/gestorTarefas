import { Routes } from '@angular/router';
import { TaskListComponent } from './tasklist/tasklist.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [

    {path: 'tasklist', title: 'Lista Tarefas', component: TaskListComponent},
    {path: 'taskDetails/:id', title: 'Detalhes da tarefa', component: TaskDetailsComponent},
    {path: '', redirectTo: 'tasklist', pathMatch: 'full'}
];
