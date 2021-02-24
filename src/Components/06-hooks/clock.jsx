import { useEffect, useState } from 'react';

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [toChange, setToChange] = useState('');

    useEffect(() => {
        setTimeout(tick, 1000);
    }, [toChange]);

    const tick = () => {
        setTime(new Date().toLocaleTimeString());
    }

    return (
        <p>{time}</p>
    )
}

export default Clock;