import * as React from 'react'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ServiceProvider } from './Service'
import Title from './Title'

const ProductList = React.lazy(() => import('productlist/ProductList'))
const ProductDetails = React.lazy(() => import('productdetails/ProductDetails'))

const Core = () => (
  <ServiceProvider>
    <BrowserRouter>
      <Title />
      <div className="container mt-24">
        <React.Suspense fallback={'Loading'}>
          <Routes>
            <Route path="list/*" element={<ProductList />} />
            <Route path="detail/*" element={<ProductDetails />} />
            <Route path="*" element={<Navigate to="/list" replace />} />
          </Routes>
        </React.Suspense>
      </div>
    </BrowserRouter>
  </ServiceProvider>
)

export default Core
