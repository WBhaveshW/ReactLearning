import AdminPanel from "./components/AdminPanel";
import CheckLogin from "./components/CheckLogin";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FirstTailWindCss from "./components/FirstTailWindCss";
import ShoppingList from "./components/ShoppingList";
import FirstCounterApp from "./components/FirstCounterApp";
import FirstSharedCounterApp from "./components/FirstSharedCounterApp";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import Stack from "./components/Stack";
import TicTacToe from "./components/TicTacToe";

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to my app..</h1>
        <MyButton />
        <Profile />
        <Routes>
          <Route path="/path" element={<CheckLogin />} />
        </Routes>
      </div>
      <div className="flex flex-row space-x-3 items-center justify-center min-h-screen bg-gray-100 p-3">
        <FirstTailWindCss />
        <FirstTailWindCss />
        <FirstTailWindCss />
        <FirstTailWindCss />
        <FirstTailWindCss />
      </div>
      <ShoppingList />
      <FirstCounterApp />
      <FirstSharedCounterApp />
      <ExpensiveCalculation />
      <div>
        <h1>Welcome Stack DS..</h1>
        <Stack />
      </div>
      <div>
        <h1>Show/List Games The Tic-Tac-Toe Game</h1>
        <TicTacToe />
      </div>
    </Router>
  );
}
