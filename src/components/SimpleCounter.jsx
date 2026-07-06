import { useState, useEffect, useRef } from "react";

const SimpleCounter = ({
  end,
  text,
  isVisible = true,
  duration = 2.5,
}) => {
  const [count, setCount] = useState(0);

  const frameRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    const durationMs = duration * 1000;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percent = Math.min(progress / durationMs, 1);

      const value = Math.floor(percent * end);

      setCount(value);

      if (percent < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      startTimeRef.current = null;
    };
  }, [isVisible, end, duration]);

  return (
    <span>
      {count}
      {text}
    </span>
  );
};

export default SimpleCounter;