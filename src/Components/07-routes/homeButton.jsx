import { useHistory } from 'react-router-dom';

const HomeButton = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return (
        <button type="button" className="btn btn-outline-info" onClick={handleClick}> Take me home </button>
    )
}

export default HomeButton; 