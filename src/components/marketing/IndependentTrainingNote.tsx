import { AppStoreLinks } from "./AppStoreLinks";
import type { LandingLink, ScreensSection } from "@/lib/marketing/landing-types";

interface Props {
  note: ScreensSection["independentNote"];
  appLinks: LandingLink[];
}

export function IndependentTrainingNote({ note, appLinks }: Props) {
  return (
    <aside className="ecosystem-independent-note" aria-labelledby="independent-training-title">
      <div className="ecosystem-independent-note__copy">
        <h3 id="independent-training-title">{note.title}</h3>
        <p>{note.description}</p>
      </div>
      <AppStoreLinks appLinks={appLinks} />
    </aside>
  );
}
