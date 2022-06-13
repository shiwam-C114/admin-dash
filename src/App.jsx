
import './App.css';
import ProductForm from './components/ProductForm';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <div>
     <ProductForm />
     <div className='App'>
      <ProductListing />
     </div>
    </div>
  );
}

export default App;
