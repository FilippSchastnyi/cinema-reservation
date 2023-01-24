import { AuthContext, authContext } from '@src/contexts/AuthContext';
import AppRoutes from './routes/AppRoutes';
import './css/_index.scss';

const App = () => (
  <AuthContext.Provider value={authContext}>
    <AppRoutes
      isAuthorized={false}
    />
  </AuthContext.Provider>
);

export default App;
