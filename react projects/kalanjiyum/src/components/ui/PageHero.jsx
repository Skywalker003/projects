import { Link } from 'react-router-dom'
import {ChevronRight} from 'lucide-react'

export default function PageHero({title, subtext, page, parent, parentPath}) {
    return (
        <section className='page-hero'>
            <div className="container page-hero_inner">
                <div className='page-hero_breadcrumb'>
                    <Link to="/">Home</Link>
                    <ChevronRight size={16} />
                    {parent && (
                        <>
                            <Link to={parentPath}>{parent}</Link>
                            <ChevronRight size={16} />
                        </>
                    )}
                    <span>{page}</span>
                </div>
                <h1 className='page-hero_title'>{title}</h1>
                {subtext && <p className='page-hero_subtext'>{subtext}</p>}
            </div>
        </section>
    )
}