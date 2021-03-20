import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ShoeDetailsComponent } from '../shoe-details/shoe-details.component';

@Injectable({
  providedIn: 'root'
})
export class RouteDeactivationService implements CanDeactivate<any>{

  canDeactivate(component:ShoeDetailsComponent):any{
      if(component.isDirty)
        return window.confirm("Are you sure you want to exit")

      return true
  }


  constructor() { }
}
