import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export default function Confetti() {
  /*
   *This code snippet would otherwise be use if:
   * Confetti does not span the screen height and width
   * All you need to do is add width(windowDimension.width) inside confetti, and height as well
   */
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  /*
   *This code snippet would otherwise be use if:
   * Confetti does not span the screen height and width
   * All you need to do is add width(windowDimension.width) inside confetti, and height as well
   */
  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  /*
   *This code snippet would otherwise be use if:
   * Confetti does not span the screen height and width
   * All you need to do is add width(windowDimension.width) inside confetti, and height as well
   */
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);
  return (
    <div>
      <ReactConfetti tweenDuration={60} numberOfPieces={100} gravity={0.03} />
    </div>
  );
}
