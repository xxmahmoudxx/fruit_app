import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from '../categorys/edit/edit.component';
const routes: Routes = [
  {
    path:'categorys/home',component : HomeComponent},
    {
      path: 'categorys/create',
      component: CreateComponent,
    },
    { path:'categorys/edit/:id',
    component: EditComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],


})
export class CategorysRoutingModule { }
