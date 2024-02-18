import type { ReactNode } from "react";

import { SiteFooter } from "~/components/SiteFooter.tsx";

export function LayoutWithSiteFooter({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex-1">
        <div className="border-b">
          <div className="container flex-1 items-start">
            <main className="relative py-6 lg:gap-10 lg:py-8">{children}</main>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
