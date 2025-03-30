"use client";
import { useState } from "react";

export default function Home() {
  let turnOn: HTMLAudioElement;
  let turnOff: HTMLAudioElement;

  const [isOn, setIsOn] = useState(true);

  if (typeof window !== "undefined") {
    turnOn = new Audio("/sounds/windowsXPOn.mp3");
    turnOff = new Audio("/sounds/windowsXPOff.mp3");
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>, type: string) {
    e.preventDefault();

    if (type === "down") {
      e.currentTarget.style.backgroundPosition = "-215px -5px";
    } else if (type === "up") {
      e.currentTarget.style.backgroundPosition = "-5px -5px";
    }
  }

  function clickActionHandler() {
    if (isOn) {
      turnOff.play();
    } else {
      turnOn.play();
    }
    setIsOn((prev) => !prev);
  }

  return (
    <>
      <main
        className={`min-h-screen pb-[25px] pt-40 transition-colors duration-1000 ${
          isOn ? "bg-white" : "bg-black"
        }`}
      >
        <div className="w-[190px] mx-auto">
          <div className="rounded-full w-[188px] h-[174px] mt-[7px] ml-[6px] absolute bg-[#FF0000]"></div>
          <button
            className="w-[200px] h-[190px] absolute bg-[url(/transparent_button_sprite.png)] bg-[position:-5px_-5px] bg-no-repeat bg- border-0 block [-webkit-tap-highlight-color: transparent;]"
            title="Svenskeknappen"
            onMouseDown={(e) => handleClick(e, "down")}
            onMouseUp={(e) => handleClick(e, "up")}
            onClick={clickActionHandler}
          ></button>
          <div className="w-[200px] h-[190px] bg-[url(/transparent_button_shadow.png)] bg-no-repeat"></div>
        </div>
      </main>
    </>
  );
}
