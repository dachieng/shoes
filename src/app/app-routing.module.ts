import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
{path:'welcome',component:WelcomeComponent},
{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
{path:'shoes', component:ShoeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
