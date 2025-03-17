// // class 

// class room {

// light (){
//     console.log("weight color");
    
// }
// ac (){
//     console.log("bluestar");
    
// }
// bed (){
//     console.log("emamattress");
    
// }
// color (){
//     console.log("black");
    
// }
// }
// const output = new room();
// output.light();
// output.ac();
// output.bed();
// output.color();



// // class constuctor 

class car {
    constructor(color,speed,brand,model,price) {
        this.color=color;
        this.speed=speed;
        this.brand=brand;
        this.model=model;
        this.price=price;
    }
    output(){console.log(`i need ${this.color} color car\nthe maximum speed ${this.speed} kmph\ni like ${this.brand} brand\nthe specific ${this.model} model\nmy budget ${this.price}doller`)}
}
const finaloutput = new car("black",650,"susuki","supra","1cr");
finaloutput.output();