import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  //{path:'',component: DepartmentListComponent},
  //{path:'',redirectTo:'/department' ,pathMatch:'prefix'},
  {path:'',redirectTo:'/department' ,pathMatch:'full'},
  {path:'department',component: DepartmentListComponent},
  {path:'employee' ,component:EmployeeListComponent},
  {
    path:'department/:id' ,component:DepartmentDetailComponent,
    children:[
      {path:'Overview',component:DepartmentOverviewComponent},
      {path:'Contact' ,component:DepartmentContactComponent}
    ]
  },
  {path:'**' ,component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModules=[
  EmployeeListComponent,
  DepartmentListComponent ,
  PageNotFoundComponent ,
  DepartmentDetailComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent
]