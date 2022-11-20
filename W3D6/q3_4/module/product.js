let c = class prod{
    constructor(name, description, price, id, quantity){
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = id;
        this.quantity = quantity;
    }

    toString(){
        return  "Description: " + this.description + "\nPrice: " + this.price;
    }

    display(){
        return  "ID: "+ this.id + "\nDescription: " + this.description + "\nPrice: " + this.price;
    }
}

module.exports = c;