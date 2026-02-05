"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats: { value: number; suffix?: string; prefix?: string; label: string; sub: string }[] = [
  { value: 41, suffix: "+", label: "Yıllık Tecrübe", sub: "1983'ten bu yana" },
  { value: 50, suffix: "+", label: "Ürün Kategorisi", sub: "Havuz ekipmanları" },
  { value: 1000, suffix: "+", label: "Tamamlanan Proje", sub: "Türkiye genelinde" },
  { value: 100, prefix: "%", label: "Müşteri Odaklı", sub: "İhtiyaca özel çözüm" },
];

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  inView,
  delay,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const duration = 1800;
  const steps = 40;
  const stepDuration = duration / steps;
  const increment = value / steps;

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - start - delay * 1000;
      if (elapsed < 0) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 2;
      setCount(Math.floor(eased * value));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value, delay]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-16 lg:py-20 bg-batech-ocean text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-batech-cyan/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-batech-cyan tabular-nums">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                  inView={inView}
                  delay={i * 0.1}
                />
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                {stat.label}
              </div>
              <div className="mt-1 text-sm text-batech-silver">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
