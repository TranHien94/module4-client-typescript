
import {useRef, useState, useEffect} from 'react'


export const MutableRef = () => {
    const [timer, setTimer]  = useState(10)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if(interValRef.current) window.clearInterval(interValRef.current)
    }
    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
        //cleanup
        return () => {
            stopTimer()
        }
    }, [])

    return (
        <div>
            HookTimer - {timer}
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    )




}