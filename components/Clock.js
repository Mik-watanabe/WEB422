// Build a Clock component (3 marks total)
// In components/Clock.js, create a component that:
// Imports useState and useEffect.
// Uses useState(null) to hold the current date.
// In useEffect,
// Initializes the date state to new Date().
// Sets up a setInterval to update it every second.
// Cleans up with clearInterval on unmount.
// Renders the time using
// jsx
// CopyEdit
// {date?.toLocaleTimeString(props.locale)}
// Accepts a locale prop (pass "en-CA").
import { useState, useEffect } from "react"
export default function Clock(props) {
    const [currentDate, setCurrentDate] = useState(null);

    useEffect(() => {
        setCurrentDate(new Date());

        const clock = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(clock)
        }
    }, []);
    return currentDate?.toLocaleTimeString(props.locale)
}
