import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { SolutionsSection } from '@/components/solutions-section'
import { SecurityServices } from '@/components/security-services'
import { WhyChooseUsFeatures } from '@/components/why-choose-us-features'
import { AiSolutions } from '@/components/ai-solutions'
import { AboutUs } from '@/components/about-us'
import { Footer } from '@/components/footer'
import { BecomeChannelPartner } from '@/components/become-channel-partner'
import { FAQSection } from '@/components/faq-section'
import { AnimatedSection } from '@/components/ui/animated-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AnimatedSection>
        <AiSolutions />
      </AnimatedSection>
      <AnimatedSection>
        <BecomeChannelPartner />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <SolutionsSection />
      </AnimatedSection>
      <AnimatedSection>
        <SecurityServices />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUsFeatures />
      </AnimatedSection>
      <AnimatedSection>
        <AboutUs />
      </AnimatedSection>
      <FAQSection />
      <Footer />
    </main>
  )
}

