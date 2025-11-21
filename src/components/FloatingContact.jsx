import React from "react";
import { personal } from "../data/meta.js";

function toWhatsApp(num) {
  const digits = (num || "").replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

export default function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-2">
      <a
        href={`tel:${personal.phone}`}
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary text-black shadow-soft hover:opacity-90 transition"
        aria-label="Call"
        title={`Call ${personal.phone}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.33.57 3.56.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C11.3 21.01 3 12.71 3 2.99a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.23.2 2.44.57 3.56a1 1 0 0 1-.25 1.03l-2.2 2.2Z"/>
        </svg>
        <span className="text-sm font-semibold hidden sm:block">Call</span>
      </a>
      <a
        href={toWhatsApp(personal.phone)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/90 text-slate-900 shadow-soft hover:bg-white transition"
        aria-label="WhatsApp"
        title="WhatsApp Chat"
      >
        <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
          <path fill="currentColor" d="M19.11 17.58c-.32-.15-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.05 1.27-.2.21-.39.24-.71.08-.32-.16-1.33-.49-2.53-1.57-.94-.84-1.58-1.87-1.76-2.19-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.02-.56-.07-.16-.74-1.78-1.01-2.44-.27-.65-.55-.56-.74-.57-.19-.01-.4-.01-.62-.01-.22 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.63 0 1.55 1.14 3.05 1.3 3.26.16.21 2.25 3.43 5.46 4.8.76.33 1.35.53 1.81.68.76.24 1.45.2 2 .12.61-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.36Z"/>
          <path fill="currentColor" d="M27.49 4.51A12.98 12.98 0 0 0 2.32 21.12L1 27.5l6.5-1.7a12.98 12.98 0 0 0 19.98-10.37 12.9 12.9 0 0 0-3.99-10.92Zm-10.49 22A10 10 0 1 1 27 16.5a10.01 10.01 0 0 1-10 10Z"/>
        </svg>
        <span className="text-sm font-semibold hidden sm:block">WhatsApp</span>
      </a>
    </div>
  );
}


