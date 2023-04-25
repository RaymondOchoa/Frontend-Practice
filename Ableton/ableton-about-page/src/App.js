import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About';
const App = () => {
  return (
    <div className='bg-[#f8f4f4]'>
      <div className=''>
        <Header />
        <About />
        <Footer />
      </div>
    </div>
  );

}
export default App;
