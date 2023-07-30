// Triangle maker
class Triangle {
  constructor() {}

  draw(color) {
    return `<polygon points="150,20 90,180 210,180" fill="${color}" />`;
  }
}
// Circle maker
class Circle {
  constructor() {}

  draw(color) {
    return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
  }
}
// Square maker
class Square {
  constructor() {}

  draw(color) {
    return `<rect x="100" y="50" width="100" height="100" fill="${color}" />`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
