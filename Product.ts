class Product {
    
    productId: number;
    productName: string;
    productPrice: number;

    acceptDetails(Prod: IProduct) {
     
        this.productId = Prod.productId;
        this.productName = Prod.productName;
        this.productPrice = Prod.productPrice;
    }
    print() {
        console.log("Product Id : " + this.productId);
        console.log("Product Name : " + this.productName);
        console.log("Product Price : " + this.productPrice);
    }
}

interface IProduct {
    productName: string;
    productId: number;
    productPrice: number;

}
var values = {
  
    productId: 101,
    productName: 'Sugar',
    productPrice: 50
}

var product = new Product();
product.acceptDetails(values);
product.print();