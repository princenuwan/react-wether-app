export function SearchLoading() {
  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
          <span className="text-white/70 text-sm">
            Searching location...
          </span>
        </div>
      </div>
    </div>
  );
}
