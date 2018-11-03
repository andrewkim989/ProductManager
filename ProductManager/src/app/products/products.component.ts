import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private HttpService: HttpService,
    private router: Router
  ) { }

  products: any;

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    let p = this.HttpService.getAllProducts();
    p.subscribe(data => {
      this.products = data["products"];
    })
  }

  editRedirect(product) {
    this.router.navigate(["/products/edit", product._id]);
  }

  deleteProduct (product) {
    let deleted = this.HttpService.deleteProduct(product._id);
    deleted.subscribe(
      data => console.log("Data deleted", data));
    this.getProducts();
  }
}
