import { useEffect, useState } from 'react';

// Animated number: counts from 0 to `target` (same maths/timing as the original script)
export default function Counter({ target }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const speed = target / 100;
    let timer;

    const update = () => {
      if (current < target) {
        current += speed;
        setValue(Math.ceil(current));
        timer = setTimeout(update, 20);
      } else {
        setValue(target);
      }
    };
    update();

    return () => clearTimeout(timer);
  }, [target]);

  return (
    <span className="counter" data-target={target}>
      {value}
    </span>
  );
}
