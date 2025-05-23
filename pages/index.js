import { Geist, Geist_Mono } from "next/font/google";
import Hello from "@/components/Hello";
import { useState } from "react";
import Clock from "@/components/Clock";
import styles from "@/styles/Home.module.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [showClock, setShowClock] = useState(true)

  function handleClick() {
      setShowClock(!showClock);
  }
  return (
    <>
      <div className={styles.main}>
        <Hello fName="Miku" lName="Watanabe" />
        <button onClick={handleClick} className={styles.clockButton}>{showClock ? "Hide Clock" : "Show Clock"} </button>
        {showClock && <Clock locale="en-CA" />}
      </div>
    </>
  );
}
