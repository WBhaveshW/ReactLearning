
import { useState } from "react"
function FirstCounterApp() {
  return (
    <div className="flex flex-row flex-wrap space-x-4 m-11 p-10">
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  )
}

function Button() {
  const [count, setCount] = useState(77);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <>
      <button className="rounded hover:bg-blue-600 border-1 border-red-500 hover:text-white transition duration-300 m-1" onClick={handleClick}>You clicked me {count} times!..</button>
    </>
  )
}

export default FirstCounterApp;