import type { Metadata } from "next";
import Background from "@/components/layout/Background/Background";
import KCLPThumbnail from "@/components/pages/KCLPThumbnail/KCLPThumbnail";

export const metadata: Metadata = {
  title: "KCLP.ART",
  description: "Explore my digital art and creative projects under KCLP.ART.",
};

export default function KCLPARTPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen z-10">
        <Background></Background>
        <section
          id="Thumbnail"
          className="flex min-h-screen w-full px-0 pb-0 pt-10 inset-0 relative"
        >
          <KCLPThumbnail></KCLPThumbnail>
        </section>
      </main>
    </>
  );
}
