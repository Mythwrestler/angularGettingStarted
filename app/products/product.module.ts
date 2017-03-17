import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { ProductDetailComponent } from "./product-detail.component";
import { ProductListComponent } from "./product-list.component";
import { ProductDetailGuard } from "./product-guard.service";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";
import { ProductRoutingModule } from "./product-routing.module";

@NgModule({

    imports: [
        SharedModule,
        ProductRoutingModule
    ],

    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],

    providers: [
        ProductService,
        ProductDetailGuard],
})

export class ProductModule { }
