import { Component, OnInit } from '@angular/core';
import { IShoe } from './shoe';

@Component({
  selector: 'shoes-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
imageWidth:number= 100
imageMargin:number = 5
imageHeight:number = 100
showImage:boolean=true;

listFilter:string = "Heel"


  shoes:IShoe[] = [
    {
      id:1,
      name:"Black Wedge",
      release_date:"10/10/2012",
      code:"abc-224",
      price:225,
      rating:4.5,
      description:"Available for size 4,5 and 6. Very Comfy and Affordable.",
      imageUrl:"/assets/images/black-wedge.jpg"
    },
    {
      id:2,
      name:"Party Heels",
      release_date:"12/01/2019",
      code:"dse-980",
      price:214,
      rating:4.0,
      description:"All sizes available. Variety of colors also available. Suitable for party",
      imageUrl:"/assets/images/cream-party.jpg"

    },
    {
      id:3,
      name:"Creamy High",
      release_date:"09/12/2017",
      code:"acd-024",
      price:999,
      rating:3.1,
      description:"All sizes available. Suitable for both official and casual use.",
      imageUrl:"/assets/images/creamy-high.jpg"
    },
    {
      id:4,
      name:"Dolly Shoes",
      release_date:"06/12/2011",
      code:"dhe-554",
      price:578,
      rating:4.9,
      description:"All sizes available and all colors. Rush while tock still lasts.",
      imageUrl:"/assets/images/dolly-shoes.jpg"
    },
    {
      id:5,
      name:"Fuzzy Boots",
      release_date:"06/17/2018",
      code:"jfd-857",
      price:784,
      rating:5.0,
      description:"Trending in the market today. 50% off for 2 pairs and above",
      imageUrl:"/assets/images/fuzzy-boots.jpg"
    },
    {
      id:6,
      name:"Red Wedge",
      release_date:"01/01/2018",
      code:"hrf-578",
      price:876,
      rating:3.5,
      description:"All sizes available. Matches with any type of cloth.",
      imageUrl:"/assets/images/red-wedge.jpg"
    },
    {
      id:7,
      name:"White Sneakers",
      release_date:"08/15/2020",
      code:"wer-254",
      price:775,
      rating:4.9,
      description:"Trending in the market Today. Offers available upto 50% off",
      imageUrl:"/assets/images/white-sneakers.jpg"
    }
  ]

toggleImage(){
  this.showImage = !this.showImage
}


}
