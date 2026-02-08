import { MapPin, Search, X, Loader2 } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!query) return;
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center">
      {/* 🔍 Search Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="
          relative group
          w-[20vw] min-w-[220px]
          sm:w-[60vw]
          md:w-[500px]
          lg:w-[600px]
        "
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5 group-focus-within:text-white transition-all" />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for any city worldwide..."
          className="
            w-full pl-12 pr-24 py-4
            bg-white/10 backdrop-blur-xl
            border border-white/20 rounded-2xl
            text-white placeholder-white/50
            focus:outline-none focus:ring-2 focus:ring-white/30
            transition-all hover:bg-white/15
          "
        />

        {/* Clear */}
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            className="absolute right-12 top-1/2 -translate-y-1/2
                       text-white/50 hover:text-white
                       p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Location */}
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2
                     text-white/60 hover:text-white"
        >
          <MapPin className="w-5 h-5" />
        </button>
      </form>

      {/* 🌫️ Blur Result Box */}
      {open && (
        <div
          className="
            mt-4
            w-[20vw] min-w-[220px]
            sm:w-[60vw]
            md:w-[500px]
            lg:w-[600px]
            rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            shadow-lg
            px-6 py-6
            text-white
          "
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2 text-white/70">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Loading weather data...</span>
            </div>
          ) : (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">📍 Colombo, Sri Lanka</h3>
              <p className="text-white/70">Temperature: 30°C</p>
              <p className="text-white/70">Condition: Partly Cloudy</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
