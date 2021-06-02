import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  sendProductClick(Product : any){
    this._route.navigate(['ProductShowComponent/'+Product]);
  }

}
