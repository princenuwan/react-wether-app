import { useState } from "react";

export default function TemperatureToggle() {
  const [unit, setUnit] = useState("C");

  return (
    <div className="flex gap-3">
      {/* Celsius */}
      <button
        onClick={() => setUnit("C")}
        className={`
          h-[56px] px-6
          flex items-center justify-center
          rounded-2xl text-sm font-semibold
          backdrop-blur-xl border border-white/20
          transition-all duration-300
          ${
            unit === "C"
              ? "bg-white/30 text-white"
              : "bg-white/10 text-white/60 hover:bg-white/20"
          }
        `}
      >
        °C
      </button>

      {/* Fahrenheit */}
      <button
        onClick={() => setUnit("F")}
        className={`
          h-[56px] px-6
          flex items-center justify-center
          rounded-2xl text-sm font-semibold
          backdrop-blur-xl border border-white/20
          transition-all duration-300
          ${
            unit === "F"
              ? "bg-white/30 text-white"
              : "bg-white/10 text-white/60 hover:bg-white/20"
          }
        `}
      >
        °F
      </button>
    </div>
  );
}
