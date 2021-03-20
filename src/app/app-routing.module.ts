import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';
import { RouteActivationService } from './shared/route-activation.service';
import { RouteDeactivationService } from './shared/route-deactivation.service';
import { RouteResolveService } from './shared/route-resolve.service';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
{path:'welcome',component:WelcomeComponent},
{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
{path:'shoes', component:ShoeListComponent, resolve:{shoeResolve:RouteResolveService}},
{ path: 'shoes/:id', component: ShoeDetailsComponent, canActivate:[RouteActivationService],

canDeactivate:[RouteDeactivationService]},

{ path: 'errors', component: ErrorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
