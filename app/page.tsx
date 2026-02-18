import HeroGeometric from "@/components/3d-hero";
import { TokenLinks, ContractAddress } from "@/components/ui/token-links";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950 overflow-hidden text-neutral-200">
      <HeroGeometric title1="Fear Of" title2="Work" />

      {/* Overlay content placed over the hero */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-20 sm:pb-32 pointer-events-none">
        <div className="pointer-events-auto w-full px-4 flex flex-col items-center gap-6">
          <ContractAddress address="0xErgophobiaMemecoinContractAddressPlaceholder" />
          <TokenLinks />
        </div>
      </div>
    </main>
  );
}
