var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.acceptDetails = function (Prod) {
        this.productId = Prod.productId;
        this.productName = Prod.productName;
        this.productPrice = Prod.productPrice;
    };
    Product.prototype.print = function () {
        console.log("Product Id : " + this.productId);
        console.log("Product Name : " + this.productName);
        console.log("Product Price : " + this.productPrice);
    };
    return Product;
}());
var values = {
    productId: 101,
    productName: 'Sugar',
    productPrice: 50
};
var product = new Product();
product.acceptDetails(values);
product.print();
