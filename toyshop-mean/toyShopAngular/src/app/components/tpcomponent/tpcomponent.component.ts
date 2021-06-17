import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist/productlist.service';

@Component({
  selector: 'app-tpcomponent',
  templateUrl: './tpcomponent.component.html',
  styleUrls: ['./tpcomponent.component.css']
})
export class TpcomponentComponent implements OnInit {
  id;
  prod: any[] = [];

  constructor(private prodService: ProductlistService, private routes: ActivatedRoute) { }

  ngOnInit(): void {

    this.prodService.getProductsById(this.routes.snapshot.paramMap.get('id')).subscribe( (data) => {
      this.prod.push(data);
      console.log(this.prod);
    });

    // this.prodService.getProducts().subscribe((data) => {
    //   this.prod = data;
    //   console.log(data);
    // });

    // console.log(this.prod);
  }

}
