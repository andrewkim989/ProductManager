import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProduct: any;
  data: any;
  error: boolean = false;

  constructor(
    private HttpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newProduct = {name: "", price: "", image: ""};
  }

  createProduct() {
    let createNew = this.HttpService.addProduct({name: this.newProduct.name,
      price: this.newProduct.price, image: this.newProduct.image});
    createNew.subscribe(
      data => {
        this.data = data;
        if (this.data.error) {
          this.data = this.data.error;
          console.log(this.data);
          this.error = true;
          this.newProduct = {name: "", price: "", image: ""};
        }
        else {
          this.error = false;
          this.newProduct = {name: "", price: "", image: ""};
          this.router.navigate(["/products"]);
        }
      }
    );
  }

  goBack() {
    this.router.navigate(["/products"]);
  }
}
