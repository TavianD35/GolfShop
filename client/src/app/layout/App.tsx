import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from "./Header";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from '../../features/home/HomePage';
import Catalog from '../../features/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServerError from '../errors/ServerError';
import NotFound from '../errors/NotFound';
import BallStencilsPage from '../../features/productPages/BallStencilsPage';
import BallMarkersPage from '../../features/productPages/BallMarkersPage';
import DivotToolsPage from '../../features/productPages/DivotTools';
import BasketPage from '../../features/basket/BasketPage';
import agent from '../api/agent';
import { getCookie } from '../util/util';
import LoadingComponent from './LoadingComponent';
import CheckoutPage from '../../features/checkout/CheckoutPage';
import { useAppDispatch } from '../store/configureStore';
import { setBasket } from '../../features/basket/basketSlice';

function App() {
 const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if (buyerId) {
      agent.Basket.get()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch])
  
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#9e9e9e' : '#121212'
        
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  if (loading) return <LoadingComponent message="Initializing app..." />

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar />
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<ProductDetails />} />
          <Route path='/ball-stencils' element={<BallStencilsPage />} />
          <Route path='/ball-markers' element={<BallMarkersPage />} />
          <Route path='/divot-repair-tools' element={<DivotToolsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/server-error' element={<ServerError />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
