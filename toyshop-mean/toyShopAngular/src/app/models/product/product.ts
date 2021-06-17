export class Product {
    _id: string;
    productCode: string;
    productName: string;
    productDesc: string;
    productImage: string;
    categoryName: string;
    subCategoryName: string;
    brandsName: string;
    minAge: number;
    gender: string;
    productPrice: number;
    availableQty: number;
    minOrderQty: number;

    // tslint:disable-next-line:max-line-length
    constructor(_id, productCode, productName, productDesc = '', productImage = 'https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dwe70b9141/images/20332F06_1.jpg'
        // tslint:disable-next-line:align
        , categoryName, subCategoryName, brandsName, minAge = 0, gender, productPrice = 0, availableQty = 0, minOrderQty = 0){
        this._id = _id;
        this.productCode = productCode;
        this.productName = productName;
        this.productDesc = productDesc;
        this.productImage = productImage;
        this.categoryName = categoryName;
        this.subCategoryName = subCategoryName;
        this.brandsName = brandsName;
        this.minAge = minAge;
        this.gender = gender;
        this.productPrice = productPrice;
        this.availableQty  = availableQty;
        this.minOrderQty = minOrderQty;
    }
}
