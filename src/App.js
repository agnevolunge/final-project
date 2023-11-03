import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageHeader from './Components/PageHeader/PageHeader';
import HomePage from './Pages/HomePage/HomePage';
import NationalParksPage from './Pages/NationalParksPage/NationalParksPage';
import CountriesPage from './Pages/CountriesPage/CountriesPage';
import AlbumsPage from './Pages/AlbumsPage/AlbumsPage';

function App() {
  return (
    <div>
      <PageHeader/>

      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/national-parks" element={<NationalParksPage />} /> 
        <Route path="/countries" element={<CountriesPage />} /> 
        <Route path="/albums" element={<AlbumsPage />} /> 
        
        <Route path="*" element={<h1>404: Page not found</h1>} /> 
      </Routes>
    </div>
   
  );
}

export default App;
