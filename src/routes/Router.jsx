import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import News from './News';
import Events from './Events';
import Contacts from './Contact';
import PageNotFound from './PageNotFound';
import RickAndMorty from './RickAndMorty';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/list" element={<RickAndMorty />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
