import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { SubcategoriesService } from 'src/app/services/subcategories/subcategories.service';
import { BrandsService } from 'src/app/services/brands/brands.service';
import { Categories } from 'src/app/models/categories/categories';
import { Subcategories } from 'src/app/models/subcategories/subcategories';
import { Brands } from 'src/app/models/brands/brands';


@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  categoryList: Categories[] = [];
  subCategoryList: Subcategories[] = [];
  brandsList: Brands[] = [];

  constructor(private categoryService: CategoriesService, private subcategoriesService: SubcategoriesService
      , private brandsService: BrandsService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((item) => {
      this.categoryList = item;
    });

    this.subcategoriesService.getSubCategories().subscribe((item) => {
      this.subCategoryList = item;
    });

    this.brandsService.getBrands().subscribe((item) => {
      this.brandsList = item;
    });
  }
}
