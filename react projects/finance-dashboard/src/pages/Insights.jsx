import InsightKPIs from '../components/insights/InsightKPIs';
import SavingsBarChart from '../components/insights/SavingsBarChart';
import CategoryRanking from '../components/insights/CategoryRanking';
import ObservationCard from '../components/insights/ObservationCard';

export default function Insights() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <h2 className="page-header__title">Insights</h2>
        <p className="page-header__subtitle">Spending patterns and financial health</p>
      </div>

      {/* 4 KPI cards */}
      <InsightKPIs />

      {/* Observation card — full width */}
      <div style={{ marginBottom: 'var(--space-5)' }}>
        <ObservationCard />
      </div>

      {/* Charts row: savings bar + category ranking */}
      <div className="insights-charts-grid">
        <SavingsBarChart />
        <CategoryRanking />
      </div>
    </div>
  );
}
