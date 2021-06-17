export class SingleProd {
      id: string;
      availableQty: number;
      brandsName: string;
      categoryName: string;
      gender: string;
      minAge: number;
      minOrderQty: number;
      productCode: string;
      productDesc: string;
      productImage: string;
      productName: string;
      productPrice: number;
      subCategoryName: string;

    constructor(availableQty, brandsName, categoryName, gender, minAge, minOrderQty, productCode
        // tslint:disable-next-line:variable-name
        ,       productDesc , productImage, productName, productPrice, subCategoryName, id) {
            this.availableQty = availableQty;
            this.brandsName = brandsName;
            this.categoryName = categoryName;
            this.gender = gender;
            this.minAge = minAge;
            this.minOrderQty = minOrderQty;
            this.productCode = productCode;
            this.productDesc = productDesc;
            this.productImage = productImage;
            this.productName = productName;
            this.productPrice = productPrice;
            this.subCategoryName = subCategoryName;
            this.id = id;
        }
}


