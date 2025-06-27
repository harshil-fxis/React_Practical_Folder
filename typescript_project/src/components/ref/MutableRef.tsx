import { useEffect, useRef, useState } from "react"

export const Mutableref = () => {
    const [timer, setTimer] = useState(0)
    const interValref = useRef<number | null>(null)

    const stopTime = () => {
        if(interValref.current) window.clearInterval(interValref.current)
    }
    useEffect(() => {
        interValref.current = window.setInterval(() => {
            setTimer(() => timer + 1)
        }, 1000)
        return () => {
            stopTime()
        }
    }, [])
    return (
        <div>
            HookTimer - {timer} - 
            <button onClick={() => stopTime()}>Stop Timer</button>
        </div>
    )
}