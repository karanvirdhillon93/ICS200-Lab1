class Car{
constructor(model,series){
    this.model=model;
    this.series=series
}
HorsePower(Horsepower,Torque,RPM){
    //The equation to calculate horsepower: Horsepower = Torque x RPM / 5,252.
    return (Torque*RPM/5252)
}
TotalCost(Initial,Maintenance,Remainder){
    //Total cost of ownership (TCO) formula: I +M -R =TCO
    return (Initial+Maintenance-Remainder)
}
    
}

let myCar=new Car("Bmw",3)
let HP=myCar.HorsePower(50,25,75)
let Exp=myCar.TotalCost(50,000,700,34000)
console.log(`My Car ${myCar.model} ${myCar.series} , has the Yearly expense of ${Exp}, and Horsepower of ${HP}`)