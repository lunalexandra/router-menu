import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { HomePage, DriftPage, TimeAttackPage, ForzaPage, NotFound } from './pages';
import { Layout } from './components/Layout';
import "./App.css";

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    ),
    { basename: '/router-menu' }
  );

  return (
    <RouterProvider router={routes} />
  );
}
