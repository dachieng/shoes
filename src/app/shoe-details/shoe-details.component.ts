import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoesService } from '../shared/shoes.service';

@Component({
  selector: 'shoes-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.css']
})
export class ShoeDetailsComponent implements OnInit {
  shoe:any
  isDirty:boolean = true

  constructor(private route : ActivatedRoute, private shoeService : ShoesService, private router: Router) { }

  ngOnInit(): void {
    this.shoe = this.shoeService.getShoe(+this.route.snapshot.params['id'])
  }

  back(){
    this.router.navigate(['/shoes'])
  }

}
