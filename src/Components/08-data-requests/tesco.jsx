import { useState, useEffect } from "react";
import axios from 'axios';
// axios is a re-vamped version of fetch - it has some aspects that fetch is missing
import { Spinner } from 'reactstrap';
import Employee from "./employee";

const Tesco = () => {

    // error state
    const [error, setError] = useState(null);
    // loading state
    const [isLoaded, setIsLoaded] = useState(false);
    // failed state
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // get some data for me
            axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
                .then((response) => {
                    setIsLoaded(true);
                    console.log(response);
                    // response has a key called data and another key called data that contains an array
                    setData(response.data.data)
                })
                .catch((error) => {
                    setIsLoaded(true);
                    setError(error);
                })
        }, 5000)
    }, []);

    if (error) {
        return <p>oops... something wen</p>
    } else if (!isLoaded) {
        return (
            <>
                <p>Please wait</p>
                <Spinner animation="border">
                    <span>Loading...</span>
                </Spinner>
            </>
        )
    } else {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name:</th>
                        <th>Age:</th>
                        <th>Salary:</th>
                    </tr>

                    {data.map((person) => (
                        //<p>{person.employee_name}</p>
                        <tr>
                            <Employee person={person}></Employee>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
export default Tesco;