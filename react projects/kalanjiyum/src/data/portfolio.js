export const portfolioTopics = [
    { id: 'crm',         label: 'CRM',                   subFilters: ['All', 'Lead Management', 'Customer Portal', 'Sales Pipeline', 'Support Ticketing'] },
    { id: 'sales',       label: 'Sales & Distribution',  subFilters: ['All', 'Order Management', 'Route Planning', 'Pricing Engine', 'Sales Analytics'] },
    { id: 'inventory',   label: 'Inventory & Warehouse', subFilters: ['All', 'Stock Control', 'WMS', 'Barcode / RFID', 'Demand Forecasting'] },
    { id: 'procurement', label: 'Procurement',           subFilters: ['All', 'Purchase Orders', 'Vendor Management', 'RFQ', 'Approval Workflow'] },
    { id: 'finance',     label: 'Accounting & Finance',  subFilters: ['All', 'General Ledger', 'AR / AP', 'Financial Reports', 'Budgeting'] },
    { id: 'hrm',         label: 'HRM',                   subFilters: ['All', 'Payroll', 'Attendance', 'Recruitment', 'Performance Review'] },
    { id: 'mes',         label: 'MES',                   subFilters: ['All', 'Production Scheduling', 'Quality Control', 'Machine Integration', 'OEE Tracking'] },
]

export const portfolioItems = [
    // CRM
    {
        id: 1, topic: 'crm', subCategory: 'Sales Pipeline', tag: 'WEB APP', featured: true,
        title: 'B2B Sales Pipeline System',
        description: 'End-to-end pipeline management with stage tracking, deal scoring, and automated follow-up workflows for industrial B2B sales teams.',
        highlights: [
            'Visual Kanban pipeline with drag-and-drop stage management and deal value tracking',
            'Automated follow-up reminders and email sequences triggered by stage changes',
            'AI-assisted deal scoring based on engagement signals and historical win patterns',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'SendGrid'],
    },
    {
        id: 2, topic: 'crm', subCategory: 'Customer Portal', tag: 'WEB APP', featured: true,
        title: 'Customer 360 Portal',
        description: 'Unified customer view consolidating order history, service tickets, contracts, and communication logs in a single dashboard.',
        highlights: [
            'Single dashboard aggregating orders, invoices, tickets, and contracts per customer',
            'Real-time activity timeline with communication logs across email, calls, and chat',
            'Self-service portal allowing customers to raise tickets and track resolutions',
        ],
        tech: ['React', 'GraphQL', 'PostgreSQL', 'Elasticsearch', 'AWS S3'],
    },
    {
        id: 3, topic: 'crm', subCategory: 'Support Ticketing', tag: 'WEB APP', featured: true,
        title: 'Multi-Channel Support Desk',
        description: 'Helpdesk platform with SLA tracking, auto-assignment rules, and escalation workflows integrated with email and WhatsApp.',
        highlights: [
            'Unified inbox pulling tickets from email, WhatsApp, and web form into one queue',
            'SLA-based priority scoring with automatic escalation on breach risk',
            'Smart auto-assignment routing tickets to agents by skill, load, and shift schedule',
        ],
        tech: ['React', 'Node.js', 'MongoDB', 'WhatsApp Business API', 'Redis'],
    },
    {
        id: 4, topic: 'crm', subCategory: 'Lead Management', tag: 'WEB APP', featured: false,
        title: 'Lead Capture & Nurture Engine',
        description: 'Automated lead scoring and nurture sequences with campaign attribution tracking and CRM sync.',
        highlights: [
            'Web form and landing page integrations automatically feed leads into the pipeline',
            'Behaviour-based scoring adjusts lead rank on page visits, email opens, and downloads',
            'Multi-step drip sequences with conditional branching based on lead actions',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'Mailchimp API', 'Segment'],
    },
    {
        id: 5, topic: 'crm', subCategory: 'Sales Pipeline', tag: 'DASHBOARD', featured: false,
        title: 'Sales Forecasting Dashboard',
        description: 'Predictive revenue dashboard with territory-level drill-down, quota tracking, and win-rate analytics.',
        highlights: [
            'Territory and rep-level quota attainment gauges updated in real time',
            'Weighted pipeline forecast using stage probability and historical close rates',
            'Win/loss analysis with filters by product, region, competitor, and deal size',
        ],
        tech: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    },

    // Sales & Distribution
    {
        id: 6, topic: 'sales', subCategory: 'Order Management', tag: 'WEB APP', featured: true,
        title: 'Multi-Region Sales Order System',
        description: 'Centralised order management supporting multi-currency, multi-warehouse dispatch, and regional tax compliance.',
        highlights: [
            'Multi-currency order processing with live exchange rates and margin recalculation',
            'Warehouse allocation engine selects optimal dispatch location by stock and proximity',
            'Region-specific tax rule engine handling GST, VAT, and withholding tax compliance',
        ],
        tech: ['React', 'Java Spring Boot', 'Oracle DB', 'RabbitMQ', 'Docker'],
    },
    {
        id: 7, topic: 'sales', subCategory: 'Route Planning', tag: 'WEB APP', featured: true,
        title: 'Distribution Route Optimizer',
        description: 'AI-assisted delivery route planning with real-time traffic integration, vehicle capacity management, and driver app.',
        highlights: [
            'AI route optimisation minimising travel time and fuel cost across hundreds of stops',
            'Real-time traffic and road closure integration reroutes drivers on the fly',
            'Driver mobile app with turn-by-turn navigation, delivery confirmation, and POD capture',
        ],
        tech: ['React', 'React Native', 'Python', 'Google Maps API', 'PostgreSQL'],
    },
    {
        id: 8, topic: 'sales', subCategory: 'Sales Analytics', tag: 'DASHBOARD', featured: true,
        title: 'Sales Performance Analytics',
        description: 'Region-wise sales analytics with SKU-level performance, distributor scorecards, and automated monthly reports.',
        highlights: [
            'Drill-down from national → region → distributor → SKU across any metric',
            'Distributor scorecards ranking partners by fill rate, returns, and growth trend',
            'Automated monthly PDF report generation and email distribution to management',
        ],
        tech: ['React', 'D3.js', 'Python', 'BigQuery', 'Looker Studio'],
    },
    {
        id: 9, topic: 'sales', subCategory: 'Pricing Engine', tag: 'MODULE', featured: false,
        title: 'Dynamic Pricing Engine',
        description: 'Rule-based pricing engine supporting customer tiers, volume discounts, seasonal pricing, and promotional override approvals.',
        highlights: [
            'Customer tier matrix applies base price, discount bands, and payment term adjustments',
            'Seasonal and promotional pricing calendars with date-range activation',
            'Override approval workflow ensures price exceptions are authorised before order placement',
        ],
        tech: ['Node.js', 'PostgreSQL', 'Redis', 'REST API', 'Docker'],
    },
    {
        id: 10, topic: 'sales', subCategory: 'Order Management', tag: 'MOBILE APP', featured: false,
        title: 'Field Sales Order App',
        description: 'Offline-capable mobile app for field sales reps to place orders, view stock availability, and capture customer signatures.',
        highlights: [
            'Offline-first architecture syncs orders and stock data when connectivity is restored',
            'Real-time stock availability check across warehouses before order confirmation',
            'Digital signature capture and instant PDF order acknowledgement sent to customer',
        ],
        tech: ['React Native', 'SQLite', 'Node.js', 'REST API', 'Firebase'],
    },

    // Inventory & Warehouse
    {
        id: 11, topic: 'inventory', subCategory: 'WMS', tag: 'WEB APP', featured: true,
        title: 'Warehouse Management System',
        description: 'End-to-end WMS with putaway strategies, pick-pack-ship workflows, and real-time bin-level stock visibility.',
        highlights: [
            'Directed putaway assigns storage bins based on product class, size, and velocity',
            'Wave-based pick-pack-ship workflows with barcode scanning at each step',
            'Real-time bin-level stock map showing occupancy, movement history, and ageing',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'Zebra SDK', 'Docker'],
    },
    {
        id: 12, topic: 'inventory', subCategory: 'Barcode / RFID', tag: 'IOT', featured: true,
        title: 'RFID Asset Tracking System',
        description: 'RFID-based asset tracking across multi-floor facilities with zone alerts, audit trails, and ERP integration.',
        highlights: [
            'Fixed RFID readers map asset movement across zones in real time without manual scans',
            'Geo-fencing alerts notify when high-value assets leave authorised areas',
            'Full audit trail of every asset movement integrated with ERP asset register',
        ],
        tech: ['React', 'Python', 'MQTT', 'TimescaleDB', 'Impinj RFID'],
    },
    {
        id: 13, topic: 'inventory', subCategory: 'Demand Forecasting', tag: 'DASHBOARD', featured: true,
        title: 'Demand Forecasting Dashboard',
        description: 'ML-assisted demand forecasting using historical sales, seasonality patterns, and supplier lead times to optimise reorder points.',
        highlights: [
            'ML models trained on 3-year sales history with seasonality and trend decomposition',
            'Dynamic reorder point and safety stock calculation factoring supplier lead time variance',
            'Forecast accuracy scorecard with MAPE tracking per SKU and category',
        ],
        tech: ['React', 'Python', 'Scikit-learn', 'FastAPI', 'PostgreSQL'],
    },
    {
        id: 14, topic: 'inventory', subCategory: 'Stock Control', tag: 'WEB APP', featured: false,
        title: 'Multi-Warehouse Stock Control',
        description: 'Centralised stock control with inter-warehouse transfer requests, stock ageing alerts, and cycle count management.',
        highlights: [
            'Consolidated stock view across all warehouses with drill-down to bin-level detail',
            'Automated stock ageing alerts flag slow-moving items for markdown or transfer',
            'Cycle count scheduling with variance capture and automatic adjustment approval workflow',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'REST API'],
    },

    // Procurement
    {
        id: 15, topic: 'procurement', subCategory: 'Vendor Management', tag: 'WEB APP', featured: true,
        title: 'Vendor Management Portal',
        description: 'Supplier onboarding, qualification, performance rating, and contract lifecycle management in a single portal.',
        highlights: [
            'Digital onboarding collects KYC documents, bank details, and compliance certificates',
            'Vendor scorecard rates suppliers monthly on delivery, quality, and responsiveness',
            'Contract lifecycle management with renewal alerts and clause version tracking',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'DocuSign API'],
    },
    {
        id: 16, topic: 'procurement', subCategory: 'Purchase Orders', tag: 'WEB APP', featured: true,
        title: 'Digital Purchase Order System',
        description: 'Paperless PO system with budget validation, three-way matching (PO–GRN–Invoice), and automated payment scheduling.',
        highlights: [
            'Budget validation blocks POs that exceed department or project budget limits',
            'Three-way matching engine auto-reconciles PO, GRN, and supplier invoice values',
            'Matched invoices auto-schedule payment runs based on vendor payment terms',
        ],
        tech: ['React', 'Java Spring Boot', 'Oracle DB', 'SAP Integration', 'Docker'],
    },
    {
        id: 17, topic: 'procurement', subCategory: 'RFQ', tag: 'WEB APP', featured: true,
        title: 'RFQ Automation Platform',
        description: 'Automated RFQ creation, multi-vendor bid collection, comparative analysis, and award workflow with full audit trail.',
        highlights: [
            'One-click RFQ creation from purchase requisitions with auto-vendor shortlisting',
            'Vendor bid portal allows suppliers to submit and revise quotes within the deadline',
            'Side-by-side bid comparison table with weighted scoring for price, quality, and lead time',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'SendGrid', 'PDF generation'],
    },
    {
        id: 18, topic: 'procurement', subCategory: 'Approval Workflow', tag: 'MODULE', featured: false,
        title: 'Multi-Level Approval Engine',
        description: 'Configurable approval chains for purchase requisitions based on value thresholds, departments, and category rules.',
        highlights: [
            'No-code workflow builder lets admins define approval chains by value, category, and cost centre',
            'Mobile-friendly approval interface with one-tap approve, reject, or query actions',
            'Delegation rules auto-route approvals to deputies during planned absences',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'Firebase Cloud Messaging', 'REST API'],
    },

    // Accounting & Finance
    {
        id: 19, topic: 'finance', subCategory: 'General Ledger', tag: 'WEB APP', featured: true,
        title: 'General Ledger & Chart of Accounts',
        description: 'Multi-entity general ledger with automated journal entries, period-end closing workflows, and inter-company reconciliation.',
        highlights: [
            'Multi-entity ledger supports unlimited subsidiaries with consolidated reporting',
            'Automated recurring journal entries for accruals, prepayments, and depreciation',
            'Period-end closing checklist with task assignment and sign-off tracking',
        ],
        tech: ['React', 'Java Spring Boot', 'Oracle DB', 'Jasper Reports', 'Docker'],
    },
    {
        id: 20, topic: 'finance', subCategory: 'AR / AP', tag: 'WEB APP', featured: true,
        title: 'Accounts Payable Automation',
        description: 'Invoice capture, matching, approval routing, and payment run automation reducing manual AP processing time by 70%.',
        highlights: [
            'OCR-based invoice capture extracts header and line data from PDF and image invoices',
            'Auto-matching against POs and GRNs with exception queue for discrepancies',
            'Batch payment run generates bank transfer files in NEFT, RTGS, and SWIFT formats',
        ],
        tech: ['React', 'Python', 'Tesseract OCR', 'PostgreSQL', 'AWS Lambda'],
    },
    {
        id: 21, topic: 'finance', subCategory: 'Financial Reports', tag: 'DASHBOARD', featured: true,
        title: 'Financial Reporting Suite',
        description: 'Real-time P&L, balance sheet, and cash flow reports with entity consolidation and drill-through to source transactions.',
        highlights: [
            'Live P&L, balance sheet, and cash flow with entity-level and consolidated views',
            'Drill-through from any line item to the underlying journal entries and documents',
            'Scheduled report distribution sends formatted Excel or PDF to stakeholders automatically',
        ],
        tech: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Apache POI'],
    },
    {
        id: 22, topic: 'finance', subCategory: 'Budgeting', tag: 'WEB APP', featured: false,
        title: 'Budget Planning & Variance Tool',
        description: 'Annual budget creation, departmental allocation, actuals tracking, and variance analysis with forecast re-projection.',
        highlights: [
            'Bottom-up budgeting with department-level input forms and approval consolidation',
            'Monthly actuals vs budget variance heatmap with traffic-light RAG status',
            'Rolling forecast re-projection adjusts remaining-year estimates based on YTD actuals',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'Excel Add-in', 'REST API'],
    },

    // HRM
    {
        id: 23, topic: 'hrm', subCategory: 'Payroll', tag: 'WEB APP', featured: true,
        title: 'Payroll Management System',
        description: 'End-to-end payroll processing with statutory compliance (PF, ESI, TDS), payslip generation, and bank disbursement integration.',
        highlights: [
            'Automated PF, ESI, PT, and TDS calculations with monthly statutory filing reports',
            'Payslip generation with custom templates sent to employees via email and self-service portal',
            'Direct bank integration generates NEFT disbursement files for zero manual intervention',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'PDF generation', 'Bank API'],
    },
    {
        id: 24, topic: 'hrm', subCategory: 'Attendance', tag: 'WEB APP', featured: true,
        title: 'Employee Self-Service Portal',
        description: 'Leave requests, attendance regularisation, shift scheduling, and holiday calendar management with manager approval flows.',
        highlights: [
            'Biometric and mobile clock-in integration syncs attendance data automatically',
            'Employee leave balance, attendance history, and regularisation requests in one portal',
            'Shift scheduling tool with swap requests, roster templates, and compliance alerts',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'Biometric API', 'Firebase'],
    },
    {
        id: 25, topic: 'hrm', subCategory: 'Recruitment', tag: 'WEB APP', featured: true,
        title: 'Talent Acquisition Platform',
        description: 'Job posting, applicant tracking, interview scheduling, offer management, and onboarding checklist in one unified system.',
        highlights: [
            'One-click job posting to career portal, LinkedIn, and Naukri with unified applicant inbox',
            'Interview scheduler syncs with Google Calendar and auto-sends candidate invitations',
            'Digital offer letter generation with e-signature and onboarding task checklist',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'Google Calendar API', 'DocuSign'],
    },
    {
        id: 26, topic: 'hrm', subCategory: 'Performance Review', tag: 'MODULE', featured: false,
        title: 'Performance Review & KPI System',
        description: 'Goal setting, mid-year check-ins, 360° feedback, and annual appraisal workflows with rating calibration support.',
        highlights: [
            'OKR-style goal cascading from company objectives down to individual KPIs',
            '360° feedback collection from peers, direct reports, and external stakeholders',
            'Rating calibration session tool lets HR normalise scores across departments',
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'SendGrid', 'REST API'],
    },

    // MES
    {
        id: 27, topic: 'mes', subCategory: 'Production Scheduling', tag: 'WEB APP', featured: true,
        title: 'Factory Production Scheduler',
        description: 'Finite capacity production scheduling with machine calendars, shift patterns, job prioritisation, and Gantt visualisation.',
        highlights: [
            'Finite capacity scheduler accounts for machine calendars, tooling, and operator shifts',
            'Interactive Gantt chart with drag-and-drop job rescheduling and conflict detection',
            'Priority rules engine re-sequences jobs automatically on machine breakdown or urgent orders',
        ],
        tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
    },
    {
        id: 28, topic: 'mes', subCategory: 'Quality Control', tag: 'WEB APP', featured: true,
        title: 'Quality Control & SPC System',
        description: 'In-process quality checks, defect capture, statistical process control charts, and non-conformance report workflows.',
        highlights: [
            'In-process inspection forms on shopfloor tablets with mandatory checkpoint sign-off',
            'SPC control charts (X-bar, R, p-chart) with real-time out-of-control alerts',
            'Non-conformance report workflow with root cause analysis and CAPA tracking',
        ],
        tech: ['React', 'Python', 'PostgreSQL', 'D3.js', 'WebSocket'],
    },
    {
        id: 29, topic: 'mes', subCategory: 'Machine Integration', tag: 'IOT', featured: true,
        title: 'PLC & Machine Data Integration',
        description: 'OPC-UA and MQTT-based machine connectivity aggregating real-time production counts, cycle times, and fault codes into MES.',
        highlights: [
            'OPC-UA and MQTT adapters connect to PLCs, CNCs, and SCADA systems without custom code',
            'Edge gateway pre-processes raw machine signals into structured production events',
            'Real-time fault code lookup maps machine error codes to human-readable descriptions',
        ],
        tech: ['Python', 'OPC-UA', 'MQTT', 'InfluxDB', 'Grafana'],
    },
    {
        id: 30, topic: 'mes', subCategory: 'OEE Tracking', tag: 'DASHBOARD', featured: false,
        title: 'OEE & Downtime Dashboard',
        description: 'Real-time OEE calculation with availability, performance, and quality breakdowns, plus downtime reason code analysis.',
        highlights: [
            'Live OEE gauge per machine and line with availability, performance, and quality split',
            'Operator-entered downtime reason codes build a Pareto of top loss categories',
            'Shift-level and daily OEE trend charts exported to PDF for management review',
        ],
        tech: ['React', 'InfluxDB', 'Grafana', 'Python', 'WebSocket'],
    },
]
