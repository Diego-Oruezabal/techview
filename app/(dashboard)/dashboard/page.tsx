import {auth} from "@clerk/nextjs/server";
import {db} from "@/lib/db";
import { CheckCircle, Clock, TrendingUp, ClipboardCheck } from "lucide-react";
import { MetricCard } from "./components";

export default async function DashboardPage() {
  const { userId } = await auth();
  //console.log(userId);

  //doble validación de seguridad (middleware y aquí)
  if (!userId) {
    return <div>No autorizado</div>;
  }

  const interviews = await db.interview.findMany({ 
    where: { userId },
    select: {starteAt: true, completedAt: true, transcript: true}
  })

  const total = interviews.length;

  const completedInterviews = interviews.filter((i) => i.completedAt !== null);

  const totalDurationMs =completedInterviews.reduce((acc, i) => {
    return acc + (i.completedAt!.getTime() - i.starteAt.getTime());
  }, 0)

  const avgDuration = completedInterviews.length 
  ? Math.round(totalDurationMs / completedInterviews.length / 1000 / 60 )
  : 0 ;

  const successRate = total > 0
  ? 100
  : 0;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-3 rounded-md p-6 bg-white/10 backdrop-blur-lg text-white border border-white/20">
          <MetricCard 
          icon={<CheckCircle className="w-5 h-5 text-green-400" />}
          title="Completed"
          value={completedInterviews.length}
          />
           <MetricCard 
          icon={<ClipboardCheck className="w-5 h-5 text-yellow-400" />}
          title="Total"
          value={total}
          />
           <MetricCard 
          icon={<Clock className="w-5 h-5 text-purple-400" />}
          title="Average time"
          value={`${avgDuration} min`}
          />
           <MetricCard 
          icon={<TrendingUp className="w-5 h-5 text-blue-400" />}
          title="Success rate"
          value={successRate}
          />
      </div>

      <div>
        <div className="mt-4 p-4 bg-blue-600/20 border border-blue-400/30 rounded-md text-white">
        <div className="text-sm text-blue-200">
          <strong>💡 Advice:</strong> Our AI interviewers is here to help you prepare your next interview. It provides you with a personalized and interactive experience, tailored to your needs and preferences.

        </div>

        </div>
      </div>
    </div>
  )
}
