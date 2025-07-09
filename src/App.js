import "./App.css";
import NewsPage from './NewsPage';
function App() {
  console.log(window.globalCount++);
  return <NewsPage />;
}
export default App;