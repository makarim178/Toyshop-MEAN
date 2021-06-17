import { Component, OnInit } from '@angular/core';
import { SingleProd } from 'src/app/models/singleProd/single-prod';
import { MsgSingleProdService } from 'src/app/services/msgSingProd/msg-single-prod.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})

export class SingleProductComponent implements OnInit {

  productsList: SingleProd[] = [];
  title;

  constructor(private msg: MsgSingleProdService) { }

  ngOnInit(): void {
    this.title = 'abcd';

    this.getData().subscribe((data: SingleProd[]) => {
      this.title = 'asfda';
    });

    console.log(this.title);
    // this.msg.getMsg().subscribe((data: SingleProd[]) => {

    //   this.productsList = data;
    //   // console.log(this.productsList);
    //   this.title = 'asdfasf';
    // });

    // console.log(this.title);

    // this.msg.getMsg().subscribe((msg: SingleProd[]) => {
    //   this.productsList = msg;
    //   console.log(this.productsList);
    // });

    // console.log(this.productsList);
  }

  getData() {
    return this.msg.getMsg();
  }

}
