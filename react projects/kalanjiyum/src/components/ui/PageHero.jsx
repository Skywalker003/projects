import { Link } from 'react-router-dom'
import {ChevronRight} from 'lucide-react'

export default function PageHero({title, subtext, page, parent, parentPath, className, cta}) {
    return (
        <section className={`page-hero${className ? ` ${className}` : ''}`}>
            <div className="container page-hero_inner">
                <nav className='page-hero_breadcrumb' aria-label="Breadcrumb">
                    <Link to="/">Home</Link>
                    <ChevronRight size={16} aria-hidden="true" />
                    {parent && (
                        <>
                            <Link to={parentPath}>{parent}</Link>
                            <ChevronRight size={16} aria-hidden="true" />
                        </>
                    )}
                    <span>{page}</span>
                </nav>
                <h1 className='page-hero_title'>{title}</h1>
                {subtext && <p className='page-hero_subtext'>{subtext}</p>}
                {cta}
            </div>
        </section>
    )
}