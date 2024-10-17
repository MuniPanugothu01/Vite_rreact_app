
// we can store the fake store data in one variable.

var arr = ["Mango", "grapes", "pineapple", "banana"]

// iterate the array through map method in array

var res = arr.map((val, ind, arr) => { // map method can return the values, without using the retrun statement then it give the undefined 

    console.log(val);

    return (

        <li key={ind}>{val}</li> 
    )



})

// create the function with proper name 
function Display() {
    return (
        <>
        

            <ul>{res}</ul>

        </>
    )
}
export default Display;