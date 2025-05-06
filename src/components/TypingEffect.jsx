import { useEffect, useState, useRef } from "react";

export const TypingEffect = ({ text, delay }) => {
  const velocityRef = useRef({ speed: 1, endIndex: 0 });
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (velocityRef.current.endIndex === text.length) {
        velocityRef.current.speed = -1;
      } else if (velocityRef.current.endIndex === 0) {
        velocityRef.current.speed = 1;
      }

      velocityRef.current.endIndex += velocityRef.current.speed;
      setDisplayText(text.slice(0, velocityRef.current.endIndex));
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return (
    <h1>
      {displayText}
      <span>|</span>
    </h1>
  );
};
