'use strict';
import Individual from './individual';
import Humans from './People.json';

const User = () => {

    return (
        <>
            {Humans.map((person) => (
                <Individual
                    key={person.id}
                    name={person.name}
                    city={person.address.city}
                    info={person}
                    website={person.website}
                />
            ))}
        </>
    );

}

export default User; 