import React, { Suspense } from 'react';
import { RouterComponent } from './RoutesComponent';

import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>} >
      <RouterProvider router={RouterComponent} />
    </Suspense>
  );
}

export default App;
