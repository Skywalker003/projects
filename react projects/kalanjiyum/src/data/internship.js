import { Laptop, Users, Calendar, Award, BookOpen, User, RefreshCw } from 'lucide-react'
export const domains = [
    {
        badge: 'TECH',
        badgeColor: '#ef4444',
        image: '/images/internpage2.png',
        domainKey: 'Software Development',
        title: 'Software Development',
        desc: 'Build real-world applications across web, mobile, and AI using modern tech stacks.',
        rolesLabel: 'Internship Available',
        roles: [
            'Frontend Development',
            'Backend Development',
            'Full Stack Development',
            'Mobile App Development',
            'AI/ML',
            'Networking',
        ],
        tagsLabel: 'Tech Stack',
        tagGroups: [
            { label: 'Frontend',           tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Angular'] },
            { label: 'Backend',            tags: ['Node.js', 'Python', 'Java', 'C#', 'Laravel (PHP)'] },
            { label: 'Database',           tags: ['MySQL', 'PostgreSQL', 'MS SQL Server'] },
            { label: 'Mobile Development', tags: ['Flutter', 'Android (Java/Kotlin)', 'iOS (Swift / Xcode)'] },
        ],
    },
    {
        badge: 'CORE',
        badgeColor: '#3b82f6',
        image: '/images/internpage3.png',
        domainKey: 'Industrial Automation',
        title: 'Industrial Automation (Industry 4.0)',
        desc: 'Gain hands-on experience with cutting-edge industrial systems, PLCs, IoT and SCADA technologies.',
        rolesLabel: 'Core Areas',
        roles: [
            'IoT (Internet of Things)',
            'IIoT (Industrial IoT)',
            'Industry 4.0 Systems',
            'Electronics Systems',
        ],
        internshipsLabel: 'Internship Available',
        internships: [
            'PLC Programming',
            'Embedded Systems',
            'SCADA & HMI',
            'IoT & IIoT Development',
        ],
        tagsLabel: 'Skills Covered',
        tags: ['Electrical Basics', 'Basic Wiring', 'PLC Programming', 'Embedded Systems', 'HMI', 'SCADA'],
    },
    {
        badge: 'OPERATIONS',
        badgeColor: '#6b7280',
        image: '/images/internpage4.png',
        domainKey: 'Administration',
        title: 'Administration',
        desc: 'Develop business acumen and operational skills across HR, project management and business analysis.',
        rolesLabel: 'Internship Available',
        roles: [
            'Business Analysis & Market Research',
            'HR & Operations Trainee',
            'Finance & Accounts Trainee',
        ],
        tagsLabel: 'Sub-Domains',
        tags: ['Human Resources', 'Project Management', 'Business Operations', 'Finance & Accounts'],
    },
]

export const internReasons = [
    { icon: Laptop,    title: 'Online & Offline Mode',   text: 'Join us from anywhere or work on-site — both modes are fully supported.' },
    { icon: Users,     title: 'Industry Mentorship',    text: 'Learn directly from certified engineers and experienced developers.' },
    { icon: Calendar,  title: 'Flexible Duration',      text: 'Intern on your own schedule. Duration is flexible based on your availability.' },
    { icon: Award,     title: 'Completion Certificate', text: 'Earn a verified certificate on successful completion of your internship.' },
]

export const eligibilityCards = [
    { icon: BookOpen,  title: 'Students',          text: 'Currently pursuing any degree in engineering, computer science, business, or related fields' },
    { icon: User,      title: 'Fresh Graduates',   text: 'Recently completed your degree and looking for real-world hands-on experience' },
    { icon: RefreshCw, title: 'Career Switchers',  text: 'Looking to transition into tech, automation, or business domains' },
]

export const internBenefits = [
    'Hands-on experience with real industry projects',
    'Mentorship from certified engineers and developers',
    'Exposure to Industry 4.0 tools and technologies',
    'Flexible work mode — online or offline from Madurai',
    'Completion certificate recognized by industry',
    'Opportunity for full-time role based on performance',
]

export const steps = [
    { num: '01', title: 'Choose Your Domain',      text: 'Pick Software Development, Industrial Automation, or Administration' },
    { num: '02', title: 'Submit Application',       text: 'Fill out the internship application form with your details and interests' },
    { num: '03', title: 'Interview & Onboarding',  text: 'Quick intro call with our team to understand your goals' },
    { num: '04', title: 'Start Learning',           text: 'Begin working on real projects with guidance from mentors' },
]

export const faqs = [
    {
        q: 'Is the internship paid?',
        a: 'The internship is currently unpaid. However, interns gain valuable hands-on experience and a verified completion certificate from Kalanjiyam Technical Solutions.',
    },
    {
        q: 'How long is the internship?',
        a: 'The duration is flexible and can be adjusted based on your availability and learning goals. We work around your schedule.',
    },
    {
        q: 'Is it online or offline?',
        a: 'Both options are available. You can work online remotely from anywhere in the world, or visit our Madurai office for an offline internship experience.',
    },
    {
        q: 'Will I get a certificate?',
        a: 'Yes. All interns who successfully complete the program receive a verified completion certificate from Kalanjiyam Technical Solutions.',
    },
    {
        q: 'How do I apply?',
        a: 'Click the Apply Now button, choose your domain of interest, and fill out the internship application form. Our team will contact you within 48 hours.',
    },
]
