import { Card, CardContent } from '@/components/ui/card'

type StatCardProps = {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <Card className="justify-center rounded-3xl border-[#e5e7eb] bg-white px-6 py-9 shadow-none md:px-8 md:py-12 lg:py-16">
      <CardContent className="px-0">
        <p className="m-0 text-2xl font-semibold leading-tight text-[#4b5563] md:text-3xl lg:text-[40px]">
          {value}
        </p>
        <p className="mb-0 mt-4 text-base leading-6 text-[#6b7280] md:mt-6 md:text-lg md:leading-[26px]">
          {label}
        </p>
      </CardContent>
    </Card>
  )
}
