import { useAnalytics } from '../../hooks/useAnalytics';
import { formatPct } from '../../utils/formatters';

export default function ObservationCard() {
  const { observation, expensePctChange, curIncome, curExpense } = useAnalytics();

  const insights = [];

  if (observation) insights.push(observation);

  if (curIncome > 0 && curExpense > 0) {
    const ratio = Math.round((curExpense / curIncome) * 100);
    if (ratio > 90) {
      insights.push(`You're spending ${ratio}% of this month's income — very little left to save.`);
    } else if (ratio < 40) {
      insights.push(`You're spending only ${ratio}% of this month's income — excellent savings discipline.`);
    }
  }

  if (curIncome > 0 && curExpense === 0) {
    insights.push('No expenses logged this month yet — great start!');
  }

  if (expensePctChange > 20) {
    insights.push(`Expenses jumped ${formatPct(expensePctChange)} vs last month — review recent purchases.`);
  } else if (expensePctChange < -15) {
    insights.push(`Expenses dropped ${formatPct(Math.abs(expensePctChange), false)} vs last month — great cost control.`);
  }

  if (insights.length === 0) {
    insights.push('Add more transactions over multiple months to see personalised insights here.');
  }

  return (
    <div className="observation-card fade-in-up stagger-7">
      <div className="observation-card__icon">💡</div>
      <div className="observation-card__text">
        {insights.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  );
}
