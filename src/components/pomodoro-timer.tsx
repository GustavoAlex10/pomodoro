import React, {useState} from 'react'
import { useInteval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {

    const [ mainTime, setMainTime] = useState(props.pomodoroTime)

    useInteval(() =>{
        setMainTime(mainTime - 1)
    }, 1000)

    return (
        <div className='pomodoro'>
            <Timer mainTime={mainTime}/>
            <Button text={'teste'}/>
        </div>
    )
}