
import { contactFeatures } from "@/lib/data/contact-data";
import { SplitHero } from "../ui/heroes/SplitHero";

export default function ContactHero() {
  return (
    // <section className="relative pt-8 border-b border-gray-200 pb-12 isolate overflow-hidden bg-linear-to-r from-primary/5 via-white to-primary/10 gap-10">
    //   <Container>
    //     <Breadcrumb items={[{ label: "Contact Us" }]} className="mb-8" />

    //     <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
    //       <div className="w-full">
    //         <h1 className="max-w-4xl text-4xl font-bold leading-[1.2] tracking-tight text-black sm:text-5xl">
    //           Let&apos;s Build Smart Solutions Together
    //         </h1>

    //         <p className="mt-6 max-w-2xl text-md leading-7 text-gray-600 sm:leading-6">
    // Partner with Teknovia for software development, digital
    // marketing, and scalable technology solutions tailored to your
    // business goals.
    //         </p>

    //         <div className="mt-7 grid-cols-1 grid sm:grid-cols-3 gap-4 sm:gap-3">
    //           {contactFeatures.map((contact) => (
    //             <div
    //               className="flex flex-col gap-2 justify-start items-start"
    //               key={contact.id}
    //             >
    //               <div className="text-primary flex justify-center items-center p-2 bg-primary-100 rounded-full">
    //                 <contact.icon size={20} />
    //               </div>

    //               <h3 className="font-bold text-black text-sm">
    //                 {contact.title}
    //               </h3>

    //               <p className="text-sm text-gray-400">
    //                 {contact.description}
    //               </p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //       <div className="relative w-full pb-8 sm:pb-10">
    //         <div className="aspect-3/2 overflow-hidden">
    //           <Image
    //             src="/images/contact-background.png"
    //             alt="Teknovia technology and business solutions"
    //             fill
    //             priority
    //             className="object-cover rounded-3xl"
    //             sizes="(max-width: 1024px) 100vw, 38vw"
    //           />
    //         </div>

    //         <div className="absolute xl:bottom-[-3] sm:bottom-6 sm:right-6 bottom-0 max-sm:left-6 w-[calc(100%-2rem)] max-w-80 rounded-2xl bg-[#106B65] p-6 shadow-xl shadow-slate-900/10 ">
    //           <div className="flex justify-center max-w-12 items-center rounded-lg mb-2 pb-3 bg-white/10 px-1 pt-2 shadow-lg backdrop-blur-xl">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="white"
    //               strokeWidth={2}
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               className="w-5 h-5"
    //               aria-hidden="true"
    //             >
    //               <path d="M3 14h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2z"></path>
    //               <path d="M21 14h-3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2z"></path>
    //             </svg>
    //           </div>
    //           <h3 className="font-heading text-xl font-bold text-white">
    //             Talk to Our Experts
    //           </h3>

    //           <p className="mt-2 text-sm leading-6 text-primary-100">
    //             Schedule a free consultation to discuss your project
    //             requirements.
    //           </p>

    //           <Link
    //             href="/contact#contact-form"
    //             className="mt-5 inline-flex w-full items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary-800 transition duration-200 hover:bg-primary hover:text-white"
    //           >
    //             Schedule a Meeting
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </Container>
    // </section>
    <SplitHero
      id="contact-hero"
      breadcrumb={[{ label: "Contact Us" }]}
      badge="Contact Us"
      title={
        <>
          Let&apos;s Build Smart
          <br />
          <span className="text-primary">Solutions Together.</span>
        </>
      }
      description="Partner with Teknovia for software development, digital marketing, and scalable technology solutions tailored to your business goals."
      image={{
        src:"/images/contact-background.png",
        alt:"Teknovia technology and business solutions",
        aspectClass: "aspect-3/2",
        objectClass: "object-cover",
      }}
      features={contactFeatures.map((item) => ({
        icon: item.icon,
        text: item.title,
        desc: item.description,
      }))}
      primaryButton={{
        label: "Schedule a Meeting",
        href: "#contact-form",
      }}
      backgroundClass="bg-[#FFFFFF]"
      textClass="text-slate-950"
      descriptionClass="text-gray-600"
      headingClass="font-heading text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl"
    />
  );
}
