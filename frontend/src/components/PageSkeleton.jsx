const Shimmer = ({ className }) => (
  <div className={`animate-pulse bg-white/8 rounded-xl ${className}`} />
);

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-[#020B14]">
      {/* Hero skeleton */}
      <div className="relative min-h-[60vh] bg-[#061A2B] flex items-end pb-16 px-6">
        <div className="max-w-7xl mx-auto w-full space-y-4">
          <Shimmer className="h-3 w-32" />
          <Shimmer className="h-10 w-2/3" />
          <Shimmer className="h-4 w-1/2" />
          <Shimmer className="h-4 w-2/5" />
          <div className="flex gap-3 pt-2">
            <Shimmer className="h-11 w-40 rounded-full" />
            <Shimmer className="h-11 w-36 rounded-full" />
          </div>
        </div>
      </div>

      {/* Cards skeleton */}
      <div className="bg-[#020B14] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <Shimmer className="h-3 w-24 mx-auto" />
            <Shimmer className="h-8 w-64 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <Shimmer className="h-52 rounded-none" />
                <div className="p-5 space-y-3">
                  <Shimmer className="h-3 w-20" />
                  <Shimmer className="h-6 w-3/4" />
                  <Shimmer className="h-3 w-full" />
                  <Shimmer className="h-3 w-5/6" />
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Shimmer className="h-3" />
                    <Shimmer className="h-3" />
                    <Shimmer className="h-3" />
                    <Shimmer className="h-3" />
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <Shimmer className="h-7 w-24" />
                    <Shimmer className="h-9 w-20 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
