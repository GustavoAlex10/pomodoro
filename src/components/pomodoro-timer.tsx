import React, {useState} from 'react'
import { useInteval } from '../hooks/use-interval';
import { secondsToTime } from '../utils/seconds-to-time';

interface Props {
    defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {

    const [ mainTime, setMainTime] = useState(props.defaultPomodoroTime)

    useInteval(() =>{
        setMainTime(mainTime - 1)
    }, 1000)

    return <div>Olá Mundo! {secondsToTime(mainTime)} </div>
}