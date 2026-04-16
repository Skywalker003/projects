export default function SectionHeading({
  label,
  heading,
  subtext,
  align = 'center'
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>

      {label && (
        <span className="section-heading_label">{label}</span>
      )}

      <h2 className="section-heading_title">{heading}</h2>

      <div className="section-heading_accent" />

      {subtext && (
        <p className="section-heading_subtext">{subtext}</p>
      )}

    </div>
  )
}