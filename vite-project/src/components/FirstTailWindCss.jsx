function FirstTailWindCss() {

  function handleClick() {
    alert('You clicked me!');
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 m-3 border-2 border-blue-500 p-5 rounded-md sm:rounded-lg md:rounded-xl">
      <h1 className="text-4xl font-bold">Welcome to Tailwind CSS!</h1>
      <p className="mt-4 text-lg text-gray-600">Start building your components with ease.</p>
      <button onClick={handleClick} className="mt-6 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        Click Me
      </button>
    </div>
  );
}

export default FirstTailWindCss;
