import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CompanyComponent } from './company/company.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  {
    path: 'about',
    children: [
      {
        path: 'company',
        title: 'About | Company',
        component: CompanyComponent,
      },
      {
        path: 'employees',
        title: 'About | Employees',
        component: EmployeesComponent,
      },
    ],
  },
  {
    path: 'home',
    children: [
      {
        path: 'contact',
        title: 'About | Contact',
        component: ContactComponent,
      },
    ],
  },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent },
];
