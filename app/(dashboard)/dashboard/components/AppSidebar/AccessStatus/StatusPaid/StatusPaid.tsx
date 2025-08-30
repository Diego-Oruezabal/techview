import { Badge } from "@/components/ui/badge";



export function StatusPaid() {
  return (
    <div className="border border-white flex items-start gap-4 p-4 text-sm bg-green-600 rounded-md">
      <div>
        <h3 className="font-semibold text-2xl mb-2 text-center">🚀 Full access</h3>
        <Badge variant="outline" className="w-full bgreen-800 text-green-200 justify-center">
            Plan Activated
        </Badge>
        <p className="mt-2 text-sm opacity-90 text-center">You have full access to all features. Thank you for being a valued user!</p>
      </div>
      
    </div>
  )
}
