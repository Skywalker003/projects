import {
    Target, Eye, IndianRupee, Users, Lightbulb, ShieldCheck,
    Settings, RefreshCw, Globe, Network, Cpu, Wrench,
    Search, PenTool, Code2, Rocket,
    Laptop, Calendar, Award, BookOpen, User,
    TrendingUp, Cog,
} from 'lucide-react'

const iconMap = {
    Target, Eye, IndianRupee, Users, Lightbulb, ShieldCheck,
    Settings, RefreshCw, Globe, Network, Cpu, Wrench,
    Search, PenTool, Code2, Rocket,
    Laptop, Calendar, Award, BookOpen, User,
    TrendingUp, Cog,
}

// Accepts either a React component ref (hardcoded fallback) or a string name (from API)
export const resolveIcon = (icon) =>
    typeof icon === 'string' ? (iconMap[icon] ?? null) : icon
