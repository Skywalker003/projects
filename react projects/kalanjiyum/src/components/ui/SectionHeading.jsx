export default function SectionHeading({
  label,
  heading,
  subtext,
  align = 'center'
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>

      {label && (
        <span className="section-heading__label">{label}</span>
      )}

      <h2 className="section-heading__title">{heading}</h2>

      <div className="section-heading__accent" />

      {subtext && (
        <p className="section-heading__subtext">{subtext}</p>
      )}

    </div>
  )
}