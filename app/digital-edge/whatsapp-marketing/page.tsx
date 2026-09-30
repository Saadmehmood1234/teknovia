import FAQ from "@/components/FAQ";
import { WhatsAppMarketingHero } from "@/components/digital-edge/whatsapp-marketing/WhatsAppMarketingHero";
import { WhatsAppWhy } from "@/components/digital-edge/whatsapp-marketing/WhatsAppWhy";
import { WhatsAppEconomics } from "@/components/digital-edge/whatsapp-marketing/WhatsAppEconomics";
import { WhatsAppFeatures } from "@/components/digital-edge/whatsapp-marketing/WhatsAppFeatures";
import { WhatsAppManagement } from "@/components/digital-edge/whatsapp-marketing/WhatsAppManagement";
import { WhatsAppBlogTopics } from "@/components/digital-edge/whatsapp-marketing/WhatsAppBlogTopics";
import { whatsappFaqs } from "@/lib/data/digital-edge";
import ProblemSolution from "@/components/digital-edge/whatsapp-marketing/ProblemSolution";


export default function WhatsAppMarketingPage() {
  return (
    <main>
      <WhatsAppMarketingHero />
      <WhatsAppWhy />
      <WhatsAppEconomics />
      <ProblemSolution/>
      <WhatsAppFeatures />
      <WhatsAppManagement />
      <WhatsAppBlogTopics />

      <FAQ
        title="Frequently Asked Questions"
        description="Common questions about WhatsApp Business API, automation and WhatsApp marketing."
        faqs={whatsappFaqs}
      />
    </main>
  );
}
