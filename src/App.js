import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './Footer';
import Contact from './pages/Contact';
import About from "./pages/About";
import Home from "./pages/Home";
import { GithubProvider } from './context/github/Github.context';
import { AlertProvider } from './context/alert/Alert.context';
import Alert from './components/layout/Alert';
import NotFound from './pages/NotFound';
function App() {
  return (
    <>
      <GithubProvider>
        <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert/>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
        </AlertProvider>
      </GithubProvider>
    </>
  );
}

export default App;
