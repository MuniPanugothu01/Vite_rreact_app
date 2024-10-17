
// praticing the array iteration method 

var obj = [{ name: "Muni", age: 23 },
{ name: "lakpathi", age: 42 },
{ name: "ranga", age: 29 },
{ name: "vicky", age: 4 },
{ name: "manvitha", age: 2 }

]
var obj_res = obj.map((val, ind, arr) => {
    if (val["age"] >= 18) {

        return (
            <li key={ind}> Mr: {val["name"]}, your Age:  {val["age"]} </li>
        )
    }
    return null
})
console.log(obj_res);

function Array_Map() {
    return (
        <>
            <p>People aged more than 18: </p>
            <p>{obj_res}</p>
        </>
    )
}
export default Array_Map;
