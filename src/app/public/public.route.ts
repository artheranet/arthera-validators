import {Routes} from '@angular/router';
import {PublicLayoutComponent} from "./components/public-layout.component";
import {LoginPage} from "./pages/login.page";

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: LoginPage
      }
    ]
  },
];
