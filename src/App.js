import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './components/navbar/Navbar';
import BasicCard from './components/header/Header';
import Menu from './components/menu/Menu';
import InstagramSection from './components/instaSection/InstagramSection';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <BasicCard/>
      <Menu/>
      <InstagramSection/>
      <Footer/>
    </div>
  );
}

export default App;
