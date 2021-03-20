import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConverToSpacePipe } from './shared/conver-to-space.pipe';
import { StarComponent } from './star/star.component';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';
import { ErrorsComponent } from './errors/errors.component';
import { RouteActivationService } from './shared/route-activation.service';
import { RouteDeactivationService } from './shared/route-deactivation.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoeListComponent,
    NavComponent,
    WelcomeComponent,
    ConverToSpacePipe,
    StarComponent,
    ShoeDetailsComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RouteActivationService, RouteDeactivationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
