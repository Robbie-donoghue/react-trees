import { useState } from "react";

export default function Monkey() {
  const [visible, setVisible] = useState(false);

  //false
  //when button clicked - visible ecome true
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Show monkey
      </button>
      {visible ? (
        <img src="https://i.kym-cdn.com/photos/images/original/002/007/635/845.jpg" />
      ) : null}
    </div>
  );
}
