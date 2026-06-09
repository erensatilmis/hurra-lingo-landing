import { useState } from "react";
import { Download, Smartphone } from "lucide-react";
import Container from "../ui/Container";
import AppComingSoonModal from "../ui/AppComingSoonModal";
import {
  socialBrandStyles,
  socialIconMap,
  WhatsAppIcon,
} from "../icons/SocialIcons";
import {
  mobileAppBanner,
  mobileAppModal,
  socialLinks,
  whatsappUrl,
} from "../../data/content";

export default function TopBar() {
  const [appModalOpen, setAppModalOpen] = useState(false);

  return (
    <>
      <div className="border-b border-slate-200/80 bg-white/90">
        <Container>
          <div className="flex items-center justify-between gap-4 py-2">
            <button
              type="button"
              onClick={() => setAppModalOpen(true)}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-linear-to-r from-primary-600 to-primary-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-primary-600/20 transition-all hover:from-primary-700 hover:to-primary-600 sm:gap-2.5 sm:px-4 sm:py-2 sm:text-sm"
              aria-label={mobileAppBanner.label}
            >
              <Smartphone className="h-4 w-4 shrink-0" />
              <span className="sm:hidden">{mobileAppBanner.shortLabel}</span>
              <span className="hidden sm:inline">{mobileAppBanner.label}</span>
              <Download className="h-3.5 w-3.5 shrink-0 opacity-80 transition-transform group-hover:translate-y-0.5" />
            </button>

            <div className="flex items-center gap-1.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp ile iletişime geç"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#20BD5A]"
              >
                <WhatsAppIcon className="h-6 w-6" />
              </a>

              {socialLinks.map((item) => {
                const Icon = socialIconMap[item.id];

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                      socialBrandStyles[item.id] ??
                      "text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    {Icon ? <Icon /> : null}
                  </a>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      {appModalOpen && (
        <AppComingSoonModal
          title={mobileAppModal.title}
          description={mobileAppModal.description}
          cta={mobileAppModal.cta}
          onClose={() => setAppModalOpen(false)}
        />
      )}
    </>
  );
}
