'use strict';

const Second = () => {

    // how to incorporate HTML and JS in one
    const name = `Kiera Walton`;
    const date = new Date();
    const firstName = 'Kiera';
    const lastName = 'Walton';

    return (
        <>
            <h1>Hello friends, nice to see you</h1>
            <p>{name}</p>
            <p>This component was created on: {date.toLocaleDateString()}</p>
            <p>{firstName} {lastName}</p>
            <p>{`${firstName} ${lastName}`}</p>
            <p>The current time is: {date.toLocaleTimeString()}</p>
        </>
    );

}

export default Second;