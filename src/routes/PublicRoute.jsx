import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component, restricted = false, redirectTo = '/chart' }) => {
  const session = useSelector((state) => state.user.isLogged);

  if (session && restricted) return <Navigate to={redirectTo} replace />;

  return <>{component}</>;
};

export default PublicRoute;
