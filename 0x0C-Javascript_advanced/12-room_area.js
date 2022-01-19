/**
  * @description - 12. Binding
  * @var {object} roomDimensions
  * @function getArea - function that returns the surface area of a the object using the width and length
  * @returns {Number} surface area of a the object using the width and length
  * @var {Number} boundGetArea
  */
let roomDimensions = {width: 50, length: 100, getArea() {
		                    return this.width * this.length;
	}
};

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);
// test
console.log(roomDimensions.getArea());
