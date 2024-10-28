"use client";
export default function Home() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>, type: string) {
    e.preventDefault();

    if (type === "down") {
      e.currentTarget.style.backgroundPosition = "-215px -5px";
    } else if (type === "up") {
      e.currentTarget.style.backgroundPosition = "-5px -5px";
    }
  }

  return (
    <>
      <main className="min-h-screen">
        <div className="w-[190px] mx-auto mb-[25px] mt-40">
          <div className="rounded-full w-[188px] h-[174px] mt-[7px] ml-[6px] absolute bg-[#FF0000]"></div>
          <button
            className="w-[200px] h-[190px] absolute bg-[url(/transparent_button_sprite.png)] bg-[position:-5px_-5px] bg-no-repeat bg- border-0 block [-webkit-tap-highlight-color: transparent;]"
            title="Svenskeknappen"
            onMouseDown={(e) => handleClick(e, "down")}
            onMouseUp={(e) => handleClick(e, "up")}
          ></button>
          <div className="w-[200px] h-[190px] bg-[url(/transparent_button_shadow.png)] bg-no-repeat"></div>
        </div>
      </main>
    </>
  );
}
