import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
