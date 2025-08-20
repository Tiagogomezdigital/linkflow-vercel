"use client"

import { useAnalyticsStats } from "@/hooks/useAnalyticsStats"
import { StatsCards } from "@/components/analytics/StatsCards"
import { TopGroupsTable } from "@/components/analytics/TopGroupsTable"

export default function ClientDashboard() {
  const { stats, loading, error } = useAnalyticsStats()

  if (loading) return <div>Carregando métricas...</div>
  if (error) return <div className="text-red-500">Erro: {error}</div>
  if (!stats) return <div>Nenhum dado encontrado.</div>

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard de Analytics</h1>
      <StatsCards stats={stats} />
      <section className="mb-8">
        <div className="bg-white/10 rounded-lg p-4 h-64 flex items-center justify-center">Gráfico de Tendências (em breve)</div>
      </section>
      <section>
        <div className="bg-white/10 rounded-lg p-4">
          <h2 className="font-semibold mb-2">Top Grupos</h2>
          <div className="overflow-x-auto">
            <TopGroupsTable groups={stats.topGroups} />
          </div>
        </div>
      </section>
    </main>
  )
}
