import { useState } from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from '../../data/categories';
import { generateId } from '../../utils/formatters';

function validate(fields) {
  const errors = {};
  if (!fields.desc.trim())          errors.desc     = 'Description is required.';
  if (!fields.date)                 errors.date     = 'Date is required.';
  if (!fields.type)                 errors.type     = 'Type is required.';
  if (!fields.category)             errors.category = 'Category is required.';
  if (!fields.amount)               errors.amount   = 'Amount is required.';
  else if (isNaN(Number(fields.amount)) || Number(fields.amount) <= 0)
                                    errors.amount   = 'Enter a positive number.';
  return errors;
}

const today = new Date().toISOString().slice(0, 10);

export default function TransactionForm({ tx, onClose }) {
  const { dispatch } = useAppContext();
  const isEdit = Boolean(tx);

  const [fields, setFields] = useState({
    desc:     tx?.desc     ?? '',
    amount:   tx?.amount   ? String(tx.amount) : '',
    type:     tx?.type     ?? 'expense',
    category: tx?.category ?? '',
    date:     tx?.date     ?? today,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const catOptions = fields.type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

  function set(key, value) {
    const next = { ...fields, [key]: value };

    // Reset category when type changes and current category is invalid
    if (key === 'type') {
      const validCats = value === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
      if (!validCats.includes(next.category)) next.category = '';
    }

    setFields(next);
    if (submitted) setErrors(validate(next));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const payload = {
      id:       tx?.id ?? generateId(),
      desc:     fields.desc.trim(),
      amount:   Number(fields.amount),
      type:     fields.type,
      category: fields.category,
      date:     fields.date,
    };

    if (isEdit) {
      dispatch({ type: 'EDIT_TRANSACTION', payload });
      dispatch({ type: 'SHOW_TOAST', payload: { message: 'Transaction updated', type: 'success' } });
    } else {
      dispatch({ type: 'ADD_TRANSACTION', payload });
      dispatch({ type: 'SHOW_TOAST', payload: { message: 'Transaction added', type: 'success' } });
    }

    dispatch({ type: 'CLOSE_MODAL' });
    onClose();
  }

  function field(key, label, inputEl) {
    return (
      <div className="form-group">
        <label className="form-label">{label}</label>
        {inputEl}
        {errors[key] && <div className="form-error">{errors[key]}</div>}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Description */}
      {field('desc', 'Description',
        <input
          className={`form-input${errors.desc ? ' error' : ''}`}
          type="text"
          placeholder="e.g. Swiggy order"
          value={fields.desc}
          onChange={e => set('desc', e.target.value)}
          autoFocus
        />
      )}

      {/* Amount + Date row */}
      <div className="form-row">
        {field('amount', 'Amount (₹)',
          <input
            className={`form-input${errors.amount ? ' error' : ''}`}
            type="number"
            min="0.01"
            step="0.01"
            placeholder="0"
            value={fields.amount}
            onChange={e => set('amount', e.target.value)}
          />
        )}
        {field('date', 'Date',
          <input
            className={`form-input${errors.date ? ' error' : ''}`}
            type="date"
            value={fields.date}
            max={today}
            onChange={e => set('date', e.target.value)}
          />
        )}
      </div>

      {/* Type + Category row */}
      <div className="form-row">
        {field('type', 'Type',
          <select
            className={`form-input${errors.type ? ' error' : ''}`}
            value={fields.type}
            onChange={e => set('type', e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        )}
        {field('category', 'Category',
          <select
            className={`form-input${errors.category ? ' error' : ''}`}
            value={fields.category}
            onChange={e => set('category', e.target.value)}
          >
            <option value="">Select category</option>
            {catOptions.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        )}
      </div>

      <div className="modal__footer">
        <button type="button" className="btn btn--ghost" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className="btn btn--primary">
          {isEdit ? 'Save Changes' : 'Add Transaction'}
        </button>
      </div>
    </form>
  );
}
