'use strict';

import ArrayItem from "./arrayItem";

const ComponentWithProps = (props) => {
    const { numberProp, booleanProp, strProp, objProp, arrayProp, funcProp } = props;
    // print an object
    const objectPropDisplay = [];

    for (let [k, v] of Object.entries(objProp)) {
        objectPropDisplay.push(<li key={k}>Value: {v}</li>);
    }

    const valuesFromArray = arrayProp.map((item) => (<p>{item}</p>));

    return (
        <>
            <p>String prop: {strProp}</p>
            <p>Number prop: {numberProp}</p>
            <p>Func prop: {funcProp()}</p>
            {
                arrayProp.map((item) => (
                    <ArrayItem key={item} item={item} />
                ))
            }
            <p>{objectPropDisplay}</p>
        </>
    );
}

export default ComponentWithProps;
