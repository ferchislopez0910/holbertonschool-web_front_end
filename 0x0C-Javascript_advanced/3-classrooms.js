 /**
   * @description - Closure and loops
   * @function createClassRoom - create aclass room of students
   * @param {Number} numbersOfStudents 
   * @returns {Number} - return students
   */

function createClassRoom(numbersOfStudents){
    /**
     * @function studentSeat - define  seats
     * @param {Number} seat number of set
     * @returns {Number} - return the number of seats
     */
    function studentSeat(seat){
        return function(){
            return seat
        }
    }
    /**
     * @var {Array} students - s
     * @var {Number} start - Iterator
     */
    let students = [];
  
    for (let start = 0; start < numbersOfStudents; start++){
        students.push(studentSeat(start+1));
    }
    return students;
}
let classRoom = createClassRoom(10);
