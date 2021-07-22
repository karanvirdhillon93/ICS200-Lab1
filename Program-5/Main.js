class Car{
    constructor(model,series){
        this.name=name;
        this.series=series
    }
    getHorsePower(Horsepower,Torque,RPM){
        //The equation to calculate horsepower: Horsepower = Torque x RPM / 5,252.
        return (Torque*RPM/5252)
    }
    getTotalCost(Initial,Maintenance,Remainder){
        //Total cost of ownership (TCO) formula: I +M -R =TCO
        return (Initial+Maintenance-Remainder)
    }
        
    }
    
let myCar=newCar("Bmw",3)

