// class Color {
//     #values;
//     constructor(r, g, b) {
//       this.#values = [r, g, b];
//     }
//     getRed() {
//       return this.#values[0];
//     }
//     setRed(value) {
//       if (value < 0 || value > 255) {
//         throw new RangeError("Invalid R value");
//       }
//       this.#values[0] = value;
//     }
//   }
  
//   const red = new Color(255, 0, 0);
//   red.setRed(1000); // RangeError: Invalid R value
  
class Color {
    static isValid(r, g, b) {
      return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
    }
  }
  
 let newColor =  Color.isValid(255, 0, 0); // true
 let newValid = Color.isValid(1000, 0, 0); // false

 console.log(newColor)
 console.log(newValid)
  