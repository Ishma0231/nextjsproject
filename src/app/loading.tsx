export default function Loading() {
  return (
    <div className="w-full h-screen p-4 box-border flex flex-col gap-6 animate-pulse">

      {/* Top section with avatar + title */}
      <div className="flex items-center gap-5">
        {/* Circle avatar */}
       

        {/* Title & subtext */}
        <div className="flex-1">
          <div className="h-5  rounded w-1/2 mb-2" style={{backgroundColor:"#5a5a5a"}}></div>
          <div className="h-4  rounded w-1/3" style={{backgroundColor:"#5a5a5a"}}></div>
        </div>
      </div>

      {/* Large rectangle (image or hero) */}
      <div className="w-full h-48  rounded-xl" style={{backgroundColor:"#5a5a5a"}}></div>


      {/* Smaller card-like section */}
      <div className="space-y-6">
        <div className="h-5  rounded w-2/5" style={{backgroundColor:"#5a5a5a"}}></div>
        <div className="h-4  rounded w-4/5" style={{backgroundColor:"#5a5a5a"}}></div>
        <div className="h-4  rounded w-3/5" style={{backgroundColor:"#5a5a5a"}}></div>
      </div>

      {/* Button skeleton */}
      <div className="w-32 h-10 rounded-lg" style={{backgroundColor:"#5a5a5a"}}></div>

    </div>
  );
}
