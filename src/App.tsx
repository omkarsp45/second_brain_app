import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;