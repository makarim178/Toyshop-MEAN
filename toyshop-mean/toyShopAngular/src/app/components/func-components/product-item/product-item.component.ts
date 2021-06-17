import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { Router } from '@angular/router';

import { MessangerServicesService } from 'src/app/services/messangerServices/messanger-services.service';
import { MsgSingleProdService } from 'src/app/services/msgSingProd/msg-single-prod.service';

import { SingleProd } from 'src/app/models/singleProd/single-prod';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input () productItem: Product;

  singleProd: SingleProd[] = [];
  constructor(private MsgServices: MessangerServicesService, private router: Router, private msg: MsgSingleProdService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  handleAddToCart(){
    this.MsgServices.sendMsg(this.productItem, 'add');
  }

  // tslint:disable-next-line:typedef
  handleRemoveCartItem() {
    this.MsgServices.sendMsg(this.productItem, 'remove');
  }

  // tslint:disable-next-line:typedef
  // onSelect(productid) {
  //   this.router.navigate(['/product', productid]);
  // }

  // tslint:disable-next-line:typedef
  handleSendDataSingleItem() {
    const prod = {
      id: this.productItem._id,
      availableQty: this.productItem.availableQty,
      brandsName: this.productItem.brandsName,
      categoryName: this.productItem.categoryName,
      gender: this.productItem.gender,
      minAge: this.productItem.minAge,
      minOrderQty: this.productItem.minOrderQty,
      productCode: this.productItem.productCode,
      productDesc: this.productItem.productDesc,
      productImage: this.productItem.productImage,
      productName: this.productItem.productName,
      productPrice: this.productItem.productPrice,
      subCategoryName: this.productItem.subCategoryName
    };

    this.singleProd.push(prod);

    this.msg.sendMsg(this.singleProd);
    this.router.navigate(['/productdetails', this.productItem._id]);
  }

}
