import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'employeedetails', component: EmployeeDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  constructor(private route: ActivatedRoute) {}
  
}

export const routingComponents=[EmployeeListComponent,EmployeeDetailsComponent,PageNotFoundComponent]