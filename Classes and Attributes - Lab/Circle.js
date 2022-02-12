class Circle{
    constructor(radius){
        this.radius = Number(radius);
    };

    get diameter(){
        return Number(this.radius * 2);
    };

    set diameter(value){
        this.radius = Number(value / 2);
    };

    get area() {
        return Math.PI * this.radius ** 2; 
    };
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);