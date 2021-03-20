import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { ShoesService } from './shoes.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivationService implements CanActivate {

  constructor(private shoeService:ShoesService, private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot):any{
    let shoeIdExists = !!this.shoeService.getShoe(+route.params['id'])

    if(!shoeIdExists){
      this.router.navigate(['/errors'])
    }
    return shoeIdExists


  }
}
