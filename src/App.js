import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Componentss/Homepage';
import DetailsPage from './Componentss/Detailpage';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>TravelMedia.in</h1>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

