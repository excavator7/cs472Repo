let c = class prod{
    constructor(name, description, price, id, quantity){
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = id;
        this.quantity = quantity;
    }

    toString(){
        return  "Description: " + this.description + "\n"
            + "\nPrice: " + this.price;
    }

    display(){
        return  "ID: "+ this.id 
            + "Description: " + this.description 
            + "Price: " + this.price;
    }
}

module.exports = c;