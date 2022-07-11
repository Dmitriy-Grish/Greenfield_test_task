import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const session = useSelector((state) => state.user.isLogged);
  const location = useLocation();

  if (!session) return <Navigate to={redirectTo} replace state={{ from: location }} />;

  return <>{component}</>;
};

export default PrivateRoute;
