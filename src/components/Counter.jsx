import { useEffect, useRef, useState } from "react";

const Counter = ({ start = 0, end, duration = 200000 }) => {
  const [count, setCount] = useState(start);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let current = start;
          const increment = Math.ceil(end / (duration / 16));

          const interval = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [start, end, duration]);

  return (
    <h3 ref={ref}>
      {count}
      <span>+</span>
    </h3>
  );
};

export default Counter;
