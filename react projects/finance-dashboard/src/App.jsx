import { AppProvider } from './context/AppContext';
import { useAppContext } from './hooks/useAppContext';
import Layout from './components/layout/Layout';
import Toast from './components/shared/Toast';
import TransactionModal from './components/shared/TransactionModal';

import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Insights from './pages/Insights';

function AppContent() {
  const { state } = useAppContext();

  const pages = {
    dashboard:    <Dashboard />,
    transactions: <Transactions />,
    insights:     <Insights />,
  };

  return (
    <Layout>
      {pages[state.currentPage] ?? <Dashboard />}
      <TransactionModal />
      <Toast />
    </Layout>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
