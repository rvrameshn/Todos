import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { ListComponent } from './components';
import { DetailsComponent } from './components';
export const RouterComponent = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<ListComponent />} />
      <Route path="/task/:id" element={<DetailsComponent />} />
    </Route>
  )
);