import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './Footer';
import Contact from './pages/Contact';
import About from "./pages/About";
import Home from "./pages/Home";
import { GithubProvider } from './context/github/Github.context';

function App() {
  return (
    <>
      <GithubProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </>
  );
}

export default App;
