
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { MessangerServicesService } from 'src/app/services/messangerServices/messanger-services.service';
import { CartServicesService } from 'src/app/services/cartServices/cart-services.service';


const key = 'id';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.css']
})
export class CartMenuComponent implements OnInit {

  cartItems = [];

  noOfCartItems = 0;
  cartTotal = 0;

  constructor(private msg: MessangerServicesService, private cartServices: CartServicesService) { }

  ngOnInit(): void {

    this.fillCart();
    this.msg.getMsg().subscribe((msg) => {
      // console.log('msg is:');

        // console.log(msg[0]);

        this.addProductToCart(msg[0], msg[1]); // Add Or Update Product


        this.cartTotal = 0;
        this.noOfCartItems = 0;


        this.cartItems.forEach(items => {
      this.cartTotal += (items.qty * items.price);
      this.noOfCartItems += items.qty;
    });
    });
  }

  // Fill cart
  fillCart() {
    this.cartServices.getCart().subscribe((data) => {
      // console.log(data[0]);
      this.cartItems = [];
      this.cartItems = data;
      // console.log(data);

      this.getCalc();
   });
  }

  getCalc() {
    this.cartTotal = 0;
    this.noOfCartItems = 0;
    this.cartItems.forEach(items => {
      this.cartTotal += (items.qty * items.price);
      this.noOfCartItems += items.qty;
    });

    this.fillCart();
  }


  // tslint:disable-next-line:typedef
  addProductToCart(product: Product, opts){
    let productExists = false;

    // tslint:disable-next-line:forin
    for (const i in this.cartItems){
      // console.log(product._id);
      // console.log(this.cartItems[i].prodCode);
      // console.log(product.productCode);

      if (this.cartItems[i].prodCode === product.productCode){
        const sessionId = JSON.parse(localStorage.getItem(key));
        const newCartItem = {
          id: this.cartItems[i]._id,
          sessionId: sessionId.id,
          prodCode: product.productCode,
          prodName: product.productName,
          prodImage: product.productImage,
          brandName: product.brandsName,
          qty: this.cartItems[i].qty,
          price: product.productPrice
        };

        if (opts === 'add') {
          newCartItem.qty++;
        } else {
          newCartItem.qty--;
          // console.log(newCartItem.qty);
        }

        if (newCartItem.qty > 0) {
          this.cartServices.UpdateCart(newCartItem).toPromise().then(data => {
            // console.log(data);
          });
        } else {
          // remove from cart
          this.cartServices.removeCarItem(newCartItem.id, newCartItem.sessionId).toPromise().then(data => {
            // console.log(data);
          });
        }

        productExists = true;
        break;
      }
    }

    if (!productExists){
      const sessionId = {
        id: localStorage.getItem(key)
      };
      // console.log(sessionId);

      const newCartItem = {
        id: product._id,
        sessionId: sessionId.id,
        prodCode: product.productCode,
        prodName: product.productName,
        prodImage: product.productImage,
        brandName: product.brandsName,
        qty: 1,
        price: product.productPrice
      };
      console.log(newCartItem);

      this.cartServices.addToCart(newCartItem).toPromise().then(data => {
        // console.log(data);
      });


      // this.http.post(apiUrl, );

      // this.cartItems.push(newCartItem);
    }
  }

}
