import { Route, Routes, Navigate } from 'react-router-dom';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import SignIn from './views/sign-in/sign-in.component';
import ChartPage from './views/chart-page/chart-page.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicRoute component={<SignIn />} restricted />}>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
      <Route path='/chart' element={<PrivateRoute component={<ChartPage />} />} />

      {/* At the moment this default route does not work correctly. Because we store the authentication state only on the client and it is reset when the page is reloaded. */}
      <Route path='*' element={<Navigate to='/chart' replace />} />
    </Routes>
  );
};

export default App;
