class Polygon {
  constructor(height, width) {
    this.height = height
    this.width = width
  }

  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.height * this.width
  }

  static lib_call(a,b){
    return a*b*2 //dont forget return
  }
}
module.exports = Polygon //make accessable by another file
