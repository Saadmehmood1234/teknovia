import FAQ from "@/components/FAQ";
import { MobileAppBenefits } from "@/components/software-services/mobile-application-development/MobileAppBenefits";
import { MobileAppHero } from "@/components/software-services/mobile-application-development/MobileAppHero";
import { MobileAppOverview } from "@/components/software-services/mobile-application-development/MobileAppOverview";
import { MobileAppProcess } from "@/components/software-services/mobile-application-development/MobileAppProcess";
import { MobileAppServices } from "@/components/software-services/mobile-application-development/MobileAppServices";
import MobileAppTechStack from "@/components/software-services/mobile-application-development/MobileAppTechStack";
import { MobileAppTypes } from "@/components/software-services/mobile-application-development/MobileAppTypes";
import { mobileAppFaqs } from "@/lib/data/software-services";

export default function MobileAppDevelopmentPage() {
  return (
    <main>
      <MobileAppHero />

      <MobileAppOverview />

      <MobileAppServices />
      <MobileAppBenefits />
      <MobileAppTypes />


      <MobileAppProcess />

      <MobileAppTechStack />
      <FAQ
        title="Frequently Asked Questions"
        description="Common questions about mobile app development"
        faqs={mobileAppFaqs}
      />
    </main>
  );
}