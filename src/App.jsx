import SearchBar from "./components/searchBar";
import TemperatureToggle from "./components/temperatureToggle";
import { SearchLoading } from "./components/searchLoading";

export default function App() {
  return (
    <div
      className="w-full min-h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/weather.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center pt-24 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Weather
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-4">
              Forecast
            </span>
          </h1>

          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Experience real-time weather forecasts and plan your day with
            confidence.
          </p>
        </div>

        {/* 🔥 Search + Toggle Row */}
        <div className="flex items-center justify-center gap-8">
          {/* Search bar */}
          <SearchBar />

          {/* Temperature toggle */}
          <TemperatureToggle />
        </div>
      </div>
    </div>
  );
}
