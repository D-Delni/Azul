import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BlueThatConnects } from './components/BlueThatConnects';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Testimonials is withheld, not deleted. All three quotes are invented clients
// with stock-photo faces — a real liability on a licensed agent's site. The
// component returns only if she supplies quotes from actual clients.
// import { Testimonials } from './components/Testimonials';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BlueThatConnects />
      <Services />
      <HowItWorks />
      {/* <Testimonials /> */}
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
