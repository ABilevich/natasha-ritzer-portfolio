import { Card, CardContent } from '@/components/ui/card'

type StatCardProps = {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <Card className="justify-center rounded-3xl border-[#e5e7eb] bg-white px-8 py-12 shadow-none md:py-16">
      <CardContent className="px-0">
        <p className="m-0 text-3xl font-semibold leading-tight text-[#4b5563] md:text-[40px]">
          {value}
        </p>
        <p className="mb-0 mt-6 text-lg leading-[26px] text-[#6b7280]">
          {label}
        </p>
      </CardContent>
    </Card>
  )
}
