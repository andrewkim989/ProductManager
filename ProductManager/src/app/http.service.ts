import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get("/prod");
  }

  addProduct(newProduct){
    return this.http.post("/prod", newProduct);
  }

  getProduct(id) {
    return this.http.get("/prod/" + id);
  }

  editProduct(id, edit) {
    return this.http.put("/prod/" + id, edit);
  }

  deleteProduct(id) {
    console.log(id);
    return this.http.delete("/prod/" + id);
  }
}
