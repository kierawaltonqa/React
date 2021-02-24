'use strict';

import MyHeader from "./header";
import Programming from "./nav";
import AboutMe from "./personal";

const Standard = () => {
    return (
        <>
            <MyHeader />
            <Programming />
            <AboutMe />
            <footer>
                <p>this is a footer</p>
            </footer>
        </>
    );
}
export default Standard;