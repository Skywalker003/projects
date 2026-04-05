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

      <InsightKPIs />

      <div className="dashboard-section--sm">
        <ObservationCard />
      </div>

      <div className="insights-charts-grid dashboard-section--sm">
        <SavingsBarChart />
        <CategoryRanking />
      </div>
    </div>
  );
}
