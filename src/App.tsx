import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import SalesReport from './components/SalesReport';
import './styles.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Sales Management App</h1>
        <ProductList />
        <SalesReport />
      </main>
    </div>
  );
};

export default App;