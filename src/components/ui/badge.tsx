import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center border border-[var(--moonlit-silver)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--ironclad-grey)]",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
