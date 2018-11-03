import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private HttpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  editform: any;
  data: any;
  error: boolean = false;

  ngOnInit() {
    this.getProduct();
    this.editform = {name: "", price: "", image: ""};
  }

  getProduct() {
    let id = this.route.snapshot.params["id"];
    let a = this.HttpService.getProduct(id);
    a.subscribe(data => {
      this.editform = data["product"];
    });
  }

  editProduct() {
    let e = this.HttpService.editProduct(this.editform._id, this.editform);
    e.subscribe(
      data => {
        this.data = data;
        if (this.data.error) {
          this.data = this.data.error;
          this.error = true;
        }
        else {
          this.error = false;
          this.router.navigate(["/products"]);
        }
      }
    );
  }

  deleteProduct () {
    let id = this.route.snapshot.params["id"];
    let deleted = this.HttpService.deleteProduct(id);
    deleted.subscribe(
      data => console.log("Data deleted", data));
    this.router.navigate(["/products"]);
  }
}
