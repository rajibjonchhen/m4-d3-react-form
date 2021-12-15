
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from '../src/components/Nav'
import MyJumbotron from '../src/components/Jumbotron'
import MyMain from '../src/components/Main'
import MySection from '../src/components/Section'
import MyFooter from '../src/components/Footer'



function App() {
  return (
    <div className="App">
      
        <MyNavbar/>
        <MyJumbotron />
      <MyMain/>
      <MySection />
    <MyFooter />

    </div>
  );
}

export default App;
