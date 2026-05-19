"use client";

import { Fragment } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { useCountUp } from "./hooks";

function StatItem({
  target,
  label,
  prefix = "",
  suffix = "",
  staticVal,
}: {
  target?: number;
  label: string;
  prefix?: string;
  suffix?: string;
  staticVal?: string;
}) {
  const n = useCountUp(target ?? 0, { duration: 1800, delay: 200 });
  return (
    <div className="fw-stat">
      <div className="v">
        {staticVal != null ? (
          staticVal
        ) : (
          <Fragment>
            {prefix}
            {n.toLocaleString("en-GB")}
            {suffix}
          </Fragment>
        )}
      </div>
      <div className="l">{label}</div>
    </div>
  );
}

export function StatsStrip() {
  return (
    <section className="fw-stats">
      {siteConfig.stats.map((s, i) =>
        s.kind === "static" ? (
          <StatItem key={i} staticVal={s.value} label={s.label} />
        ) : (
          <StatItem
            key={i}
            target={s.target}
            prefix={s.prefix}
            suffix={s.suffix}
            label={s.label}
          />
        )
      )}
    </section>
  );
}
