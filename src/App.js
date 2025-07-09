import { memo } from "react";
import "./App.css";
import NewsPage from './NewsPage';
const App = memo(function App() {
  console.log(window.globalCount++);
  return <NewsPage />;
});
export default App;