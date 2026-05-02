import './Contact.css'
import PageHero from '../components/ui/PageHero'
import ContactForm from '../components/sections/contact/ContactForm'
import OurLocations from '../components/sections/contact/OurLocations'

export default function Contact() {
    return (
        <>
            <PageHero
                className="contact-hero"
                page="Contact"
                title="Get in Touch"
                subtext="Have a project in mind? Tell us about it — we'll get back to you within 48 hours."
            />
            <ContactForm />
            <OurLocations />
        </>
    )
}
