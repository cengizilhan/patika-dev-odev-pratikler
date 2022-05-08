import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductCardContainer from './components/ProductCardContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App ">
      <Header></Header>
      
      <ProductCardContainer></ProductCardContainer>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
