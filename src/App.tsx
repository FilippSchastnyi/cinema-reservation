import { AuthProvider } from '@src/contexts/AuthContext';
import AppRoutes from './routes/AppRoutes';
import './css/_index.scss';

const App = () => (
  <AuthProvider>
    <AppRoutes
      isAuthorized={false}
    />
  </AuthProvider>
);

export default App;
