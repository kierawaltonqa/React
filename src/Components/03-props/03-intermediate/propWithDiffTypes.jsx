'use strict';

import ComponentWithProps from "./ComponenetWithProps";

const PropWithDifferentTypes = () => {
    // number
    const myVal = 10;

    // boolean
    const bool = true;

    // String
    const str = "Hello";

    // Object
    const someObj = {
        // key value pairs, any data type
        name: "Mercury",
        brand: "Mercedes",
        year: 2018,
        interiot: ["sunroof", 2, "heated seats"]
    };

    // Array
    const fruits = ["pineapple", "kiwi", "strawberries", "mango", "grapes", "pears"];

    // Function
    const someFunction = () => (`A string from a function`)

    return (
        <ComponentWithProps
            numberProp={myVal}
            booleanProp={bool}
            strProp={str}
            objProp={someObj}
            arrayProp={fruits}
            funcProp={someFunction} />
    )

}
export default PropWithDifferentTypes;