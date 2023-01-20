import { useState } from 'react';
import "@fontsource/poppins";

import { BrunchyProvider } from './Context/BrunchyContext';

import Header from "./components/Header/Header";
import HomeText from './components/HomeText/HomeText';
import Products from './components/Products/Products';
import Congratulations from './components/Congratulations/Congratulations';
import BasketReview from "./components/BasketReview/BasketReview";
// import OrderButtons from './components/OrderButtons/OrderButtons';

function App() {

  const [orderModal, setOrderModal] = useState(false);
  const [basketModal, setBasketModal] = useState(false);

  return (
    <div>
      <BrunchyProvider>
        <Header />
        <HomeText />
        <Products
          basketModal={basketModal}
          setOrderModal={setOrderModal}
          setBasketModal={setBasketModal}
        />

        {orderModal && (
          <Congratulations
            handleClose={() => setOrderModal(false)}
          />
        )}

        {basketModal && (
          <>
            <BasketReview
              setOrderModal={setOrderModal}
              setBasketModal={setBasketModal}
              handleClose={() => setBasketModal(false)}
            />
          </>
        )}

      </BrunchyProvider>
    </div>
  );
}

export default App;
