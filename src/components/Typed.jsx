import React from "react";
import { useEffect, useState } from "react";

export default function Typed({ text = "", speed = 40, delay = 200 }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    let mounted = true;
    const start = setTimeout(() => {
      let i = 0;
      const id = setInterval(() => {
        if (!mounted) return clearInterval(id);
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, speed);
    }, delay);
    return () => {
      mounted = false;
      clearTimeout(start);
    };
  }, [text, speed, delay]);
  return (
    <span className="whitespace-pre">
      {shown}
      <span className="inline-block w-[1ch] bg-white/80 animate-pulse ml-0.5" style={{ height: "1em", transform: "translateY(2px)" }} />
    </span>
  );
}


