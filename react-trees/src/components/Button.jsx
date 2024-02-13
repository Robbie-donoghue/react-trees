export default function Button() {
  function handleClick() {
    console.log("you clicked le button");
  }

  return (
    <div>
      <button
        onClick={() => {
          alert("You clicked me");
        }}
      >
        I have an alert
      </button>
      <button onClick={handleClick}>I do something </button>
    </div>
  );
}
