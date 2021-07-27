import * as React from 'react'

const Core = React.lazy(() => import('core/Core'))

const LoadingCore = () => {
  return <div>Loading Core...</div>
}

const App = () => {
  return (
    <React.Suspense fallback={<LoadingCore />}>
      <Core />
    </React.Suspense>
  )
}

export default App
