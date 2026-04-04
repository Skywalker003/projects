import { useAppContext } from '../../hooks/useAppContext';
import { useAnalytics } from '../../hooks/useAnalytics';

const OPTIONS = [
  { label: '1M', value: 1 },
  { label: '3M', value: 3 },
  { label: '6M', value: 6 },
  { label: '1Y', value: 12 },
];

export default function RangeSelector() {
  const { dispatch } = useAppContext();
  const { dashboardRange } = useAnalytics();

  return (
    <div className="range-selector">
      {OPTIONS.map(opt => (
        <button
          key={opt.value}
          className={`range-selector__btn${dashboardRange === opt.value ? ' range-selector__btn--active' : ''}`}
          onClick={() => dispatch({ type: 'SET_DASHBOARD_RANGE', payload: opt.value })}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
