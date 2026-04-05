import { useAnalytics } from '../../hooks/useAnalytics';
import CountUpNumber from '../shared/CountUpNumber';
import { formatPct } from '../../utils/formatters';

function ChangeBadge({ pct, invertColor = false }) {
  const isPositive = invertColor ? pct <= 0 : pct >= 0;
  const cls = pct === 0
    ? 'change-badge change-badge--neutral'
    : isPositive
      ? 'change-badge change-badge--up'
      : 'change-badge change-badge--down';
  const arrow = pct === 0 ? '→' : pct > 0 ? '↑' : '↓';
  return (
    <span className={cls}>
      {arrow} {formatPct(Math.abs(pct), false)}
    </span>
  );
}

function SummaryCard({ label, value, prefix = '₹', pct, invertColor, negative, icon, iconBg, index }) {
  return (
    <div className={`summary-card fade-in-up stagger-${index}`}>
      <div className="summary-card__icon" style={{ '--icon-bg': iconBg }}>
        {icon}
      </div>
      <div className="summary-card__label">{label}</div>
      <div className={`summary-card__value${negative ? ' summary-card__value--negative' : ''}`}>
        {prefix}<CountUpNumber value={Math.abs(value)} />
      </div>
      <div className="summary-card__footer">
        <ChangeBadge pct={pct} invertColor={invertColor} />
        <span className="change-badge__label">vs last month</span>
      </div>
    </div>
  );
}

export default function SummaryCards() {
  const { totalBalance, curIncome, curExpense, incomePctChange, expensePctChange } = useAnalytics();

  return (
    <div className="summary-grid">
      <SummaryCard
        index={1}
        label="Total Balance"
        value={totalBalance}
        negative={totalBalance < 0}
        prefix={totalBalance < 0 ? '−₹' : '₹'}
        pct={incomePctChange}
        invertColor={false}
        iconBg={totalBalance < 0 ? 'var(--color-red-light)' : 'var(--color-brand-light)'}
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke={totalBalance < 0 ? 'var(--color-red)' : 'var(--color-brand)'}
            strokeWidth="2" strokeLinecap="round">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
        }
      />
      <SummaryCard
        index={2}
        label="Income This Month"
        value={curIncome}
        pct={incomePctChange}
        invertColor={false}
        iconBg="var(--color-green-light)"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-green)" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        }
      />
      <SummaryCard
        index={3}
        label="Expenses This Month"
        value={curExpense}
        pct={expensePctChange}
        invertColor={true}
        iconBg="var(--color-red-light)"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        }
      />
    </div>
  );
}
