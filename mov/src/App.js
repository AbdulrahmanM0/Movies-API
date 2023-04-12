import Navbar from './component/Navbar';
import './App.css';
import Slider from './component/Slider';
import MoviesList from './component/MoviesList';
import { Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <MoviesList />
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
