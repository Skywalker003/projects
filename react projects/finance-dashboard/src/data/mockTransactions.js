// Generates ~40 realistic Indian ₹ transactions spanning the last 6 months.
// Data is deterministic (no Math.random) so it's stable across reloads
// until the user edits it.

function makeId(n) {
  return `tx_${n}`;
}

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

export const mockTransactions = [
  // ── Current month ──────────────────────────────────────────────
  { id: makeId(1),  date: daysAgo(2),  desc: 'Swiggy order',           amount: 520,   type: 'expense', category: 'Food & Dining'  },
  { id: makeId(2),  date: daysAgo(4),  desc: 'Monthly salary',          amount: 62000, type: 'income',  category: 'Salary'         },
  { id: makeId(3),  date: daysAgo(5),  desc: 'Airtel recharge',         amount: 599,   type: 'expense', category: 'Utilities'      },
  { id: makeId(4),  date: daysAgo(6),  desc: 'Ola cab ride',            amount: 280,   type: 'expense', category: 'Transport'      },
  { id: makeId(5),  date: daysAgo(7),  desc: 'Amazon order',            amount: 1349,  type: 'expense', category: 'Shopping'       },
  { id: makeId(6),  date: daysAgo(8),  desc: 'Apollo Pharmacy',         amount: 465,   type: 'expense', category: 'Health'         },
  { id: makeId(7),  date: daysAgo(9),  desc: 'Netflix subscription',    amount: 649,   type: 'expense', category: 'Entertainment'  },
  { id: makeId(8),  date: daysAgo(10), desc: 'House rent',              amount: 18000, type: 'expense', category: 'Rent'           },
  { id: makeId(9),  date: daysAgo(11), desc: 'Zomato dinner',           amount: 680,   type: 'expense', category: 'Food & Dining'  },
  { id: makeId(10), date: daysAgo(12), desc: 'Freelance project',       amount: 15000, type: 'income',  category: 'Freelance'      },

  // ── 1 month ago ────────────────────────────────────────────────
  { id: makeId(11), date: daysAgo(34), desc: 'Monthly salary',          amount: 62000, type: 'income',  category: 'Salary'         },
  { id: makeId(12), date: daysAgo(35), desc: 'Big Basket groceries',    amount: 2340,  type: 'expense', category: 'Food & Dining'  },
  { id: makeId(13), date: daysAgo(36), desc: 'House rent',              amount: 18000, type: 'expense', category: 'Rent'           },
  { id: makeId(14), date: daysAgo(37), desc: 'Metro card recharge',     amount: 500,   type: 'expense', category: 'Transport'      },
  { id: makeId(15), date: daysAgo(38), desc: 'Jio recharge',            amount: 299,   type: 'expense', category: 'Utilities'      },
  { id: makeId(16), date: daysAgo(40), desc: 'Flipkart sale',           amount: 3200,  type: 'expense', category: 'Shopping'       },
  { id: makeId(17), date: daysAgo(41), desc: 'Disney+ Hotstar',         amount: 299,   type: 'expense', category: 'Entertainment'  },
  { id: makeId(18), date: daysAgo(42), desc: 'Uber ride',               amount: 350,   type: 'expense', category: 'Transport'      },
  { id: makeId(19), date: daysAgo(43), desc: 'HDFC SIP return',         amount: 4200,  type: 'income',  category: 'Investment'     },
  { id: makeId(20), date: daysAgo(45), desc: 'Blinkit instant delivery',amount: 890,   type: 'expense', category: 'Food & Dining'  },

  // ── 2 months ago ───────────────────────────────────────────────
  { id: makeId(21), date: daysAgo(62), desc: 'Monthly salary',          amount: 62000, type: 'income',  category: 'Salary'         },
  { id: makeId(22), date: daysAgo(63), desc: 'House rent',              amount: 18000, type: 'expense', category: 'Rent'           },
  { id: makeId(23), date: daysAgo(64), desc: 'Swiggy Instamart',        amount: 730,   type: 'expense', category: 'Food & Dining'  },
  { id: makeId(24), date: daysAgo(66), desc: 'Gym membership',          amount: 1500,  type: 'expense', category: 'Health'         },
  { id: makeId(25), date: daysAgo(67), desc: 'Airtel broadband',        amount: 999,   type: 'expense', category: 'Utilities'      },
  { id: makeId(26), date: daysAgo(68), desc: 'Zerodha brokerage',       amount: 6800,  type: 'income',  category: 'Investment'     },
  { id: makeId(27), date: daysAgo(70), desc: 'Amazon Prime',            amount: 179,   type: 'expense', category: 'Entertainment'  },
  { id: makeId(28), date: daysAgo(72), desc: 'Auto rickshaw',           amount: 120,   type: 'expense', category: 'Transport'      },

  // ── 3 months ago ───────────────────────────────────────────────
  { id: makeId(29), date: daysAgo(93),  desc: 'Monthly salary',         amount: 60000, type: 'income',  category: 'Salary'         },
  { id: makeId(30), date: daysAgo(94),  desc: 'House rent',             amount: 18000, type: 'expense', category: 'Rent'           },
  { id: makeId(31), date: daysAgo(95),  desc: 'Zomato Pro order',       amount: 560,   type: 'expense', category: 'Food & Dining'  },
  { id: makeId(32), date: daysAgo(97),  desc: 'Jio recharge',           amount: 299,   type: 'expense', category: 'Utilities'      },
  { id: makeId(33), date: daysAgo(98),  desc: 'Freelance project',      amount: 22000, type: 'income',  category: 'Freelance'      },
  { id: makeId(34), date: daysAgo(100), desc: 'Ola outstation trip',    amount: 1800,  type: 'expense', category: 'Transport'      },
  { id: makeId(35), date: daysAgo(102), desc: 'Myntra sale',            amount: 2600,  type: 'expense', category: 'Shopping'       },

  // ── 4 months ago ───────────────────────────────────────────────
  { id: makeId(36), date: daysAgo(122), desc: 'Monthly salary',         amount: 60000, type: 'income',  category: 'Salary'         },
  { id: makeId(37), date: daysAgo(123), desc: 'House rent',             amount: 17500, type: 'expense', category: 'Rent'           },
  { id: makeId(38), date: daysAgo(124), desc: 'LIC premium',            amount: 4500,  type: 'expense', category: 'Health'         },
  { id: makeId(39), date: daysAgo(126), desc: 'Big Basket weekly',      amount: 1980,  type: 'expense', category: 'Food & Dining'  },
  { id: makeId(40), date: daysAgo(127), desc: 'Airtel recharge',        amount: 599,   type: 'expense', category: 'Utilities'      },
  { id: makeId(41), date: daysAgo(129), desc: 'HDFC SIP return',        amount: 3900,  type: 'income',  category: 'Investment'     },
  { id: makeId(42), date: daysAgo(130), desc: 'Uber monthly pass',      amount: 600,   type: 'expense', category: 'Transport'      },
  { id: makeId(43), date: daysAgo(132), desc: 'Spotify Premium',        amount: 119,   type: 'expense', category: 'Entertainment'  },

  // ── 5 months ago ───────────────────────────────────────────────
  { id: makeId(44), date: daysAgo(152), desc: 'Monthly salary',         amount: 60000, type: 'income',  category: 'Salary'         },
  { id: makeId(45), date: daysAgo(153), desc: 'House rent',             amount: 17500, type: 'expense', category: 'Rent'           },
  { id: makeId(46), date: daysAgo(154), desc: 'Swiggy birthday dinner', amount: 1200,  type: 'expense', category: 'Food & Dining'  },
  { id: makeId(47), date: daysAgo(155), desc: 'Metro card top-up',      amount: 300,   type: 'expense', category: 'Transport'      },
  { id: makeId(48), date: daysAgo(157), desc: 'Amazon shopping',        amount: 2100,  type: 'expense', category: 'Shopping'       },
  { id: makeId(49), date: daysAgo(158), desc: 'Pharmacy visit',         amount: 320,   type: 'expense', category: 'Health'         },
  { id: makeId(50), date: daysAgo(160), desc: 'Jio recharge',           amount: 299,   type: 'expense', category: 'Utilities'      },
];
