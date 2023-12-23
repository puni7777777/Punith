// import logo from './logo.svg';
// import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import TextHandleCard from './components/TextHandleCard';
import Footer from './components/Footer';
import Search from './components/Search';
import ContactUs from './components/Contact';


function App(props) {
  return (
    <>
      <Navbar title="Punith" />
      {/* <Search /> */}
      {/* <Login /> */}
      <div className='container my-3'>
        <TextHandleCard heading="Enter text to change" />
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
