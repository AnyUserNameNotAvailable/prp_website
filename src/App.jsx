import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Referral from './Pages/Referral';
import PageNotFound from './lib/PageNotFound';

const repoBasename = '/prp_website';
const basename = window.location.hostname.endsWith('github.io')
  ? repoBasename
  : '/';

function App() {
  return (
    <Router basename={basename}>
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