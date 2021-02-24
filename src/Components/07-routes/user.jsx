import { useParams } from 'react-router-dom';

const User = () => {

    let { id } = useParams();

    return (<p>The value from the URL is: {id}</p>)

}
export default User;