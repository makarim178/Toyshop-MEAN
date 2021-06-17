import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist/productlist.service';
import { SessionIdService } from 'src/app/services/sessionId/session-id.service';
import { Product } from 'src/app/models/product/product';
import { SessionId } from 'src/app/models/sessionId/session-id';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsList: Product[] = [];
  sessionId: SessionId[] = [];

  constructor(private productlistService: ProductlistService, private sessionIdService: SessionIdService) { }

  ngOnInit(): void {
    const key = 'id';

    this.productlistService.getProducts().subscribe((data) => {
      // console.log(data);
      this.productsList = data;
      // this.productsList.push(data);
    });

    // console.log(this.productsList);

    this.sessionIdService.getSessionId().subscribe((data) => {
      const id = data.id;

      // this.sessionId = data;
      if (!localStorage.getItem(key)) {
        console.log(id);
        localStorage.setItem(key, JSON.stringify(id));
      }
    });

    // console.log(localStorage.getItem(key));
  }

}
