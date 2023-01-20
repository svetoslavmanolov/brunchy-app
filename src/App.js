import "@fontsource/poppins";

import { BrunchyProvider } from './Context/BrunchyContext';

import Header from "./components/Header/Header";
import HomeText from './components/HomeText/HomeText';
import Products from './components/Products/Products';

function App() {
  return (
    <div>
      <Header />
      <HomeText />
      <Products />

      
    </div>
  );
}

export default App;
