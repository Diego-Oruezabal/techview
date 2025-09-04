
export default function Authlayout({
    children,
 }: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-slate-900 text-white">
      {children}
    </div>
  )
}
