// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CuboidMaker{
    constructor(attr){
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    }

    volume(){
        return `${this.length * this.width * this.height}`;
    }
    surfaceArea(){
        const lw = this.length*this.width;
        const lh = this.length*this.height;
        const wh = this.width*this.height;
        const area = lw + lh + wh  
        return area*2;
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); //130




// function CuboidMaker(attr) {
//     this.length = attr.length;
//     this.width = attr.width;
//     this.height = attr.height
//   }
//   CuboidMaker.prototype.volume = function(){
//     return `${this.length * this.width * this.height}`;
//   }
//   CuboidMaker.prototype.surfaceArea = function(){
//     const lw = this.length*this.width;
//     const lh = this.length*this.height;
//     const wh = this.width*this.height;
//     const area = lw + lh + wh  
//     return area*2;
//     // this seems like a clunky solution, id like to have found a cleaner way to do this
//   }
  
  
//   console.log(cuboid.volume()); // 100
//   console.log(cuboid.surfaceArea()); //130
  