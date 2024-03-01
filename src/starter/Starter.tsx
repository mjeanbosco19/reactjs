// It's Mandatory to use PascalCasing on each component


function MyButton() {
  return <button>I'm a button </button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>
        Welcome to <br /> my app
      </h1>
      <MyButton />
    </div>
  );
}
