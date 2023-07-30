// Dependencies
const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');
// Logo generation function
function generateLogo(logoName, textColor, logoShape, logoColor) {
  let shape;

  switch (logoShape) {
    case "triangle":
      shape = new Triangle();
      break;
    case "circle":
      shape = new Circle();
      break;
    case "square":
      shape = new Square();
      break;
    default:
      throw new Error("Invalid logo shape");
  }

  const svgContent = `<svg width="300" height="200">
    ${shape.draw(logoColor)}
    <text x="150" y="100" text-anchor="middle" fill="${textColor}" font-size="30">${logoName}</text>
  </svg>`;

  fs.writeFile('logo.svg', svgContent, err => {
    if (err) {
      console.error("Error writing SVG file:", err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

module.exports = {
  generateLogo,
};