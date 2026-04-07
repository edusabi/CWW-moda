import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import SiteAndamento from './components/SiteAndamento/SiteAndamento';
import Notfound from './components/Notfound/Notfound';

//pages
import HomeLinkBio from './pages/HomeLinkBio/HomeLinkBio';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLinkBio />} />
        <Route path="/andamento" element={<SiteAndamento />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
