import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageHeader from './Components/PageHeader/PageHeader';
import HomePage from './Pages/HomePage/HomePage';
import NationalParksPage from './Pages/NationalParksPage/NationalParksPage';
import CountriesPage from './Pages/CountriesPage/CountriesPage';
import AlbumsPage from './Pages/AlbumsPage/AlbumsPage';
import NationalParkPage from './Pages/NationalParkPage/NationalParkPage';
import AlbumPage from './Pages/AlbumPage/AlbumPage';
import CountryPage from './Pages/CountryPage/CountryPage';

function App() {
  return (
    <div>
      <PageHeader/>

      <Routes>
        <Route path="/" element={<HomePage />} /> 

        <Route path="/nationalParks" element={<NationalParksPage />} /> 
        <Route path="/nationalParks/:id" element={<NationalParkPage />} /> 

        <Route path="/countries" element={<CountriesPage />} /> 
        <Route path="/countries/:id" element={<CountryPage />} /> 
        
        <Route path="/albums" element={<AlbumsPage />} /> 
        <Route path="/albums/:id" element={<AlbumPage />} /> 
        
        <Route path="*" element={<h1>404: Page not found</h1>} /> 
      </Routes>
    </div>
   
  );
}

export default App;
