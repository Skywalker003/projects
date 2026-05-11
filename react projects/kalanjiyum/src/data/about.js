import { Target, Eye, IndianRupee, Users, Lightbulb, ShieldCheck } from 'lucide-react'

import img1 from '../assets/images/internpage2.png'
import img2 from '../assets/images/internpage3.png'
import img3 from '../assets/images/internpage4.png'
import img4 from '../assets/images/who-we-are.png'

export const aboutStats = [
    { end: 6,  suffix: '+', label: 'Years of Experience' },
    { end: 50, suffix: '+', label: 'Projects Delivered' },
    { end: 40, suffix: '+', label: 'Happy Clients' },
    { end: 6,  suffix: '',  label: 'Industry Domains' },
]

export const whoWeAreText = [
    'Founded in the industrial heart of <strong>Madurai</strong>, Kalanjiyam Technical Solutions was born in 2019 out of a vision to bridge the gap between complex engineering challenges and accessible technical innovation.',
    'From our humble beginnings, we have evolved into a multi-disciplinary powerhouse specialising in Industry 4.0 integrations and bespoke software development. Our mission is to help local and global businesses leverage their advantage in a digital-first economy.',
]

export const gallerySlides = [
    { src: img1, caption: 'Our Workspace' },
    { src: img2, caption: 'Team at Work' },
    { src: img3, caption: 'Building Solutions' },
    { src: img4, caption: 'Our Team' },
]

export const missionVisionItems = [
    {
        icon: Target,
        title: 'Our Mission',
        description: 'To demonstrate high-end automation and software engineering by providing scalable, cost-effective solutions that drive operational excellence for local and global businesses.',
    },
    {
        icon: Eye,
        title: 'Our Vision',
        description: 'To become the global standard for industrial digital transformation, starting from the roots of Madurai and expanding the horizons of what technical precision can achieve.',
    },
]

export const coreValues = [
    {
        icon: IndianRupee,
        title: 'Cost-Effectiveness',
        desc: 'Delivering premium engineering quality without the premium price tag.',
    },
    {
        icon: Users,
        title: 'Customer First',
        desc: 'Every solution is built around the specific needs and goals of our clients.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        desc: 'Constantly exploring new technologies to keep our clients ahead of the curve.',
    },
    {
        icon: ShieldCheck,
        title: 'Reliability',
        desc: 'Consistent, dependable support and solutions that our clients can count on.',
    },
]
