import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment }  from '../../environments/environment';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUlr;
  
  constructor(public http:HttpClient) { }


  getProducts() {
    return this.http.get<any>(this.baseUrl);
   }

   addProduct(obj: any) {
    return this.http.post<Product>(this.baseUrl, obj)
  }

  deleteProduct(id: string) {
    return this.http.delete<any>(this.baseUrl+`${id}`);
  }

  getProduct(id: string) {
    return this.http.get<any>(this.baseUrl+`${id}`);
  }
  
  updateProduct(obj: Product) {
    return this.http.put<Product>(this.baseUrl, obj)
  }
 
}
