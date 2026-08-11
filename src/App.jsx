import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Referral from './Pages/Referral';
import PageNotFound from './lib/PageNotFound';

const githubPagesBasename = import.meta.env.VITE_GITHUB_PAGES_BASENAME;

function getBasename() {
  if (
    typeof window === 'undefined' ||
    !window.location.hostname.endsWith('github.io') ||
    !githubPagesBasename
  ) {
    return '/';
  }

  if (githubPagesBasename === '/') {
    return '/';
  }

  return githubPagesBasename.endsWith('/')
    ? githubPagesBasename.slice(0, -1)
    : githubPagesBasename;
}

function App() {
  return (
    <Router basename={getBasename()}>
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