import { AgentsSection } from "./agentSection";
import Contact from "./contact";
import Faq from "./faq";
import Footer from "./footer";
import Header from "./header";
import HeroSection from "./heroSection";
import NewsLetterSection from "./newsLetterSection";
import { PricingSection } from "./priceSection";
import { TestimonialsSection } from "./testimonialSection";

export default function LandingPage({user, cartCount}) {
    return <>
        <Header user={user} cartCount={cartCount}></Header>
        <HeroSection></HeroSection>
        <AgentsSection></AgentsSection>
        <PricingSection></PricingSection>
        <Faq></Faq>
        <TestimonialsSection></TestimonialsSection>
        <Contact></Contact>
        <NewsLetterSection></NewsLetterSection>
        <Footer></Footer>
    </>
}