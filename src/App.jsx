import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
    </div>
  );
}
export default App;
