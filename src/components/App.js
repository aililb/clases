// https://reactrouter.com/docs/en/v6/getting-started/overview
import "./../styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./../pages/HomePage";
import InfoPage from "./../pages/InfoPage";
import NotFound from "../pages/NotFound";
import CounterPage from "../pages/CounterPage";
import TodoPage from "../pages/TodoPage";
export default function App() {
  return (
    <div className="App">
      <h1>Lili's App</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
