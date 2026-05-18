import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './FileViewer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString()

const IMAGES = ['jpg', 'jpeg', 'png', 'gif', 'webp']

export default function FileViewer({ file, label, onClose }) {
    const ext     = (file?.name || '').split('.').pop().toLowerCase()
    const isImage = IMAGES.includes(ext)
    const isPdf   = ext === 'pdf'

    const [numPages, setNumPages] = useState(null)
    const [pageNum,  setPageNum]  = useState(1)

    const [blobUrl, setBlobUrl] = useState(null)

    useEffect(() => {
        if (!isImage || !file) return
        const url = URL.createObjectURL(file)
        setBlobUrl(url)
        return () => {
            URL.revokeObjectURL(url)
            setBlobUrl(null)
        }
    }, [file, isImage])

    return (
        <div className="fv-overlay" onClick={onClose}>
            <div className="fv-box" onClick={e => e.stopPropagation()}>
                <div className="fv-header">
                    <span>{label}</span>
                    <div className="fv-header-actions">
                        {isPdf && numPages > 1 && (
                            <span className="fv-pager">
                                <button className="fv-page-btn" disabled={pageNum <= 1} onClick={() => setPageNum(p => p - 1)}><ChevronLeft size={14}/></button>
                                <span>{pageNum} / {numPages}</span>
                                <button className="fv-page-btn" disabled={pageNum >= numPages} onClick={() => setPageNum(p => p + 1)}><ChevronRight size={14}/></button>
                            </span>
                        )}
                        <button className="fv-close" onClick={onClose}><X size={16} /></button>
                    </div>
                </div>
                <div className="fv-body">
                    {isImage && <img src={blobUrl} alt={label} />}
                    {isPdf && (
                        <Document
                            file={file}
                            onLoadSuccess={({ numPages }) => { setNumPages(numPages); setPageNum(1) }}
                            loading={<p className="fv-noprev">Loading…</p>}
                            error={<p className="fv-noprev">Could not load PDF.</p>}
                        >
                            <Page pageNumber={pageNum} width={820} renderTextLayer renderAnnotationLayer />
                        </Document>
                    )}
                    {!isImage && !isPdf && (
                        <p className="fv-noprev">Preview not available for this file type.</p>
                    )}
                </div>
            </div>
        </div>
    )
}