import { Badge } from "@/components/ui/badge";


export  function StatusFreeTrial() {
  return (
    <div className="p-4 bg-blue-600 rounded-md text-sm border border-white">
      <h3 className="font-semibold text-xl mb-2 text-center">
        🚀 Free trial available
      </h3>
      <Badge variant="outline" className="w-full bg-blue-800 py-1">
        1 Free Trial 
      </Badge>
      <p className="text-xs mt-2">Create a free interview with AI</p>
    </div>
    
  );
}
