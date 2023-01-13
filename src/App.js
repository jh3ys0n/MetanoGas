import logo from './logo.svg';
import './App.css';
import AppBar from './homePages/appBar/AppBar';
import Home from './homePages/Home';
import SobreNosotros from './homePages/SobreNosotros';
import Contact from './homePages/Contact';


function App() {
  return (
    <>
      <AppBar></AppBar>
      <Home></Home>   
      <SobreNosotros></SobreNosotros>
      <Contact></Contact>
    </>
        
  );
}

export default App;
