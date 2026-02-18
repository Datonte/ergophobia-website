import HeroSection from "@/components/3d-hero";
import { TokenLinks, ContractAddress } from "@/components/ui/token-links";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  ScrollMarquee,
  TextScramble,
  ScaleOnScroll,
  GlitchOnScroll,
  ScrollProgressBar,
  ParallaxSection,
} from "@/components/ui/scroll-animations";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Red scroll progress bar at top */}
      <ScrollProgressBar />

      {/* ===== HERO SECTION ===== */}
      <HeroSection />

      {/* ===== SCROLLING MARQUEE ===== */}
      <ScrollReveal>
        <section className="relative z-20 bg-black py-6 overflow-hidden border-y border-neutral-900">
          <ScrollMarquee text="$ERGOPHOBIA" />
        </section>
      </ScrollReveal>

      {/* ===== CTA / TOKEN SECTION ===== */}
      <section
        className="relative z-20 py-24 sm:py-32 px-6 flex flex-col items-center"
        style={{ background: "radial-gradient(ellipse at center top, rgba(220,38,38,0.08) 0%, transparent 60%), #000" }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(220,38,38,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative w-full max-w-xl flex flex-col items-center gap-10 text-center">
          <ScaleOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-center uppercase tracking-wider text-neutral-300 mb-4">
              Join the <span className="text-red-600">Movement</span>
            </h2>
            <ContractAddress address="0xErgophobiaContractAddressPlaceholder" />
          </ScaleOnScroll>

          <ScaleOnScroll>
            <TokenLinks />
          </ScaleOnScroll>
        </div>
      </section>

      {/* ===== NARRATIVE SECTION ===== */}
      <section
        className="relative z-20 py-28 sm:py-40 px-6 flex flex-col items-center"
        style={{ background: "linear-gradient(180deg, #000 0%, #0a0000 50%, #000 100%)" }}
      >
        {/* Diagonal stripes background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #dc2626, #dc2626 2px, transparent 2px, transparent 40px)`,
          }}
        />

        <div className="relative w-full max-w-3xl flex flex-col items-center space-y-20">
          <GlitchOnScroll>
            <ParallaxSection speed={0.2}>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-center uppercase tracking-tight leading-tight">
                <span className="text-red-600">
                  <TextScramble text="WHY" className="font-mono" />
                </span>{" "}
                <span className="text-white">do I have</span>
                <br />
                <span className="text-white">to </span>
                <span className="text-red-500 italic">
                  <TextScramble text="work?" className="font-mono" />
                </span>
              </h2>
            </ParallaxSection>
          </GlitchOnScroll>

          <StaggerContainer className="w-full space-y-10">
            <StaggerItem>
              <div className="border border-neutral-800 rounded-2xl p-8 sm:p-10 bg-neutral-950/80 hover:border-red-900 transition-all duration-500 backdrop-blur hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed">
                  <span className="text-red-500 font-black text-3xl sm:text-4xl mr-3 font-mono">01</span>
                  Every morning your alarm goes off. You hit snooze.{" "}
                  <span className="text-white font-semibold">Again.</span> And again.
                  That&apos;s not laziness — that&apos;s{" "}
                  <span className="text-red-500 font-bold">$ERGOPHOBIA</span>.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-neutral-800 rounded-2xl p-8 sm:p-10 bg-neutral-950/80 hover:border-red-900 transition-all duration-500 backdrop-blur hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed">
                  <span className="text-red-500 font-black text-3xl sm:text-4xl mr-3 font-mono">02</span>
                  The inbox is full. The deadlines are piling up.
                  But you&apos;re here,{" "}
                  <span className="text-white font-semibold">reading about a memecoin</span>.
                  Welcome to the movement.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-neutral-800 rounded-2xl p-8 sm:p-10 bg-neutral-950/80 hover:border-red-900 transition-all duration-500 backdrop-blur hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed">
                  <span className="text-red-500 font-black text-3xl sm:text-4xl mr-3 font-mono">03</span>
                  Built by people who{" "}
                  <span className="text-red-500 font-bold">hate 9-to-5s</span>.
                  For people who dream of never working again.{" "}
                  <span className="text-white font-semibold">Stay lazy.</span>
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SECOND MARQUEE ===== */}
      <ScrollReveal>
        <section className="relative z-20 bg-black py-6 overflow-hidden border-y border-neutral-900">
          <ScrollMarquee text="FEAR OF WORK ·" />
        </section>
      </ScrollReveal>

      {/* ===== FOOTER ===== */}
      <ScrollReveal>
        <footer className="relative z-20 border-t border-neutral-900 bg-black py-10 px-6">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm text-neutral-500 font-mono uppercase tracking-widest">
              $ERGOPHOBIA
            </p>
            <p className="text-xs text-neutral-700 font-mono">
              built by people who hate 9-to-5s. stay lazy.
            </p>
          </div>
        </footer>
      </ScrollReveal>
    </main>
  );
}
