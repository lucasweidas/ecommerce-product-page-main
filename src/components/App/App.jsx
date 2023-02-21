import CartProvider from '../Context/CartContext.jsx';
import ProductProvider from '../Context/ProductContext.jsx';
import OverlayProvider from '../Context/OverlayContext.jsx';
import Header from '../Header';
import Main from '../MainContent';
import Footer from '../Footer';
import BreakpointProvider from '../Context/BreakpointContext.jsx';
import { getLocalStorage, initLocalStorage } from '../util';

if (!getLocalStorage()) {
  initLocalStorage();
}

export default function App() {
  return (
    <div className="App">
      <ProvidersWrapper>
        <Header />
        <Main />
        <Footer />
      </ProvidersWrapper>
    </div>
  );
}

function ProvidersWrapper({ children }) {
  return (
    <>
      <OverlayProvider>
        <BreakpointProvider>
          <CartProvider>
            <ProductProvider>{children}</ProductProvider>
          </CartProvider>
        </BreakpointProvider>
      </OverlayProvider>
    </>
  );
}
