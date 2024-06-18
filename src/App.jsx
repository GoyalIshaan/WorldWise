import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { FakeAuthContext } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from './components/City'
import Form from './components/Form'
import SpinnerFullPage from './components/SpinnerFullPage'

// Lazy loaded pages
const HomePage = lazy(() => import('./pages/Homepage'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Product = lazy(() => import('./pages/Product'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));


function App() {
  return (
    <CitiesProvider>
      <FakeAuthContext>
        <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage/>}>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="app" element={
              <ProtectedRoute>
                <AppLayout/>
              </ProtectedRoute>}>
              <Route index element={<Navigate replace to="cities"/>}></Route>
              <Route path="cities" element={<CityList/>}></Route>
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />}></Route>
              <Route path="form" element={<Form />}></Route>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
          </Suspense>
        </BrowserRouter>
      </FakeAuthContext>
    </CitiesProvider>
  )
}

export default App;