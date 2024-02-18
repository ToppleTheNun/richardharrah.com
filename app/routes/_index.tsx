import { LayoutWithSiteFooter } from "~/components/layouts/LayoutWithSiteFooter.tsx";
import { H1, Lead } from "~/components/typography.tsx";

export default function Index() {
  return (
    <LayoutWithSiteFooter>
      <div className="pb-8 space-y-2">
        <H1>Richard Harrah</H1>
        <Lead>Software Engineer driven to learn and relentlessly improve.</Lead>
      </div>
    </LayoutWithSiteFooter>
  );
}
