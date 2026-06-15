import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://wa.me/919745959290"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 animate-bounce group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-10 -left-20 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-800 text-xs font-semibold py-1 px-3 rounded-lg shadow-md pointer-events-none">
          Chat with us
        </span>
      </Link>
    </div>
  );
}
