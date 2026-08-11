import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Referral from './Pages/Referral';
import PageNotFound from './lib/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/referral" element={<Referral />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;