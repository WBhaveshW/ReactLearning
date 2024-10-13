
// import { useState } from "react"
// function FirstSharedCounterApp() {

//   const [count, setCount] = useState(77);
//   const handleClick = () => {
//     setCount(count + 1);
//   }
//   return (
//     <div className="flex flex-row flex-wrap space-x-4 m-11 p-10">
//       <Button count={count} handleClick={handleClick} />
//       {/* <Button count={count} handleClick={handleClick} /> */}
//     </div>
//   )
// }

// function Button({ count, handleClick }) {
//   console.log(count);
//   return (
//     <>
//       <button count={count} className="rounded hover:bg-blue-600 border-1 border-red-500 hover:text-white transition duration-300 m-1" onClick={handleClick}>You clicked me {count ? count : 0} times!..</button>
//     </>
//   )
// }

// export default FirstSharedCounterApp;



import { useState } from 'react';

export default function FirstSharedCounterApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  console.log(count);
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
