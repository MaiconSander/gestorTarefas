import { Routes } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [

    {path: 'tasklist', title: 'Lista Tarefas', component: TasklistComponent},
    {path: 'taskDetails', title: 'Detalhes da tarefa', component: TaskDetailsComponent},
    {path: '', redirectTo: 'tasklist', pathMatch: 'full'}
];
