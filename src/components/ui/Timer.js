import { useTimer } from 'react-timer-hook';

export const Timer = ({timestamp: resetTime}) => {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: resetTime, onExpire: () => console.warn('onExpire called') });
    return (
        <>
            <span><b>{`${hours}h${minutes}m${seconds}s`}</b></span>
        </>
    )
}





