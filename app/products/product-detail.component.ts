import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs/Subscription";


@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    errorMessage: any;
    pageTitle:string = 'Product Detail';
    product: IProduct;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
     }

     ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
     }

     
    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }


     onBack(): void {
         this._router.navigate(['/products']);
     }

}