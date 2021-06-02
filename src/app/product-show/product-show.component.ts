import { Component, OnInit , Input } from '@angular/core';
import {Router, ActivatedRoute,ActivatedRouteSnapshot} from '@angular/router'


@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  quantity:number = 0;
  totalAmount:number = 0;
  
  product : any
  
  productList : any[] = []


  constructor(private _router : Router, private  _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.product = this._activatedRoute.snapshot.params.parameter
    
  this.productList = [
    {
      itemType : "Burger",
      itemName : "Cheezzy",
      itemPrice : 150,
      itemQty : 0,
      imageSource : "/assets/Images/Burger1.jpg"
    },

    {
      itemType : "Burger",
      itemName : "Chickpea",
      itemPrice : 250,
      itemQty : 0,
      imageSource : "/assets/Images/Burger2.jpg"
    },

    {
      itemType : "Burger",
      itemName : "Crazzy Combos",
      itemPrice : 400,
      itemQty : 0,
      imageSource : "/assets/Images/Burger3.jpg"
    },

    {
      itemType : "Burger",
      itemName : "Chicken",
      itemPrice : 400,
      itemQty : 0,
      imageSource : "/assets/Images/Burger.jpg"
    },

    {
      itemType : "Burger",
      itemName : "Chicken",
      itemPrice : 400,
      itemQty : 0,
      imageSource : "/assets/Images/Burger5.jpg"
    },

    {
      itemType : "Burger",
      itemName : "Triple Mac",
      itemPrice : 400,
      itemQty : 0,
      imageSource : "/assets/Images/Burger4.jpg"
    },

    {
      itemType : "Pizza",
      itemName : "Classic Margherita",
      itemPrice : 450,
      itemQty : 0,
      imageSource : "/assets/Images/Pizza1.jpg"
    },

    {
      itemType : "Pizza",
      itemName : "Farmhouse",
      itemPrice : 450,
      itemQty : 0,
      imageSource : "/assets/Images/Pizza2.jpg"
    },

    {
      itemType : "Pizza",
      itemName : "Double Margherita",
      itemPrice : 450,
      itemQty : 0,
      imageSource : "/assets/Images/Pizza3.jpg"
    },

    {
      itemType : "Pizza",
      itemName : "Spicy Chicken",
      itemPrice : 450,
      itemQty : 0,
      imageSource : "/assets/Images/Pizza4.jpg"
    },

    {
      itemType : "Macarons",
      itemName : "Sweetest of Sweetest",
      itemPrice : 450,
      itemQty : 0,
      imageSource : "/assets/Images/Macarons1.jpg"
    },

    {
      itemType : "Macarons",
      itemName : "Sweetest of Sweetest",
      itemPrice : 450,
      itemQty : 0,
      imageSource : "/assets/Images/Macarons1.jpg"
    },

    {
      itemType : "Macarons",
      itemName : "Sweetest of Sweetest",
      itemPrice : 450,
      itemQty : 0,
      imageSource : "/assets/Images/Macarons1.jpg"
    }
  ]
}

decreaseQty(item:any)
{
  item.itemQty = item.itemQty-1;
  this.totalAmount = this.totalAmount - item.itemPrice;
}

increaseQty(item:any)
{
  item.itemQty = item.itemQty+1;
  this.totalAmount = this.totalAmount + item.itemPrice;
}

}
