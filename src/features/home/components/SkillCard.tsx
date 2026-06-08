import { Card, CardContent } from '@/components/ui/card'

type SkillCardProps = {
  title: string
  items: string[]
}

export function SkillCard({ title, items }: SkillCardProps) {
  return (
    <Card className="rounded-3xl border-[#e5e7eb] bg-white px-8 py-12 shadow-none md:py-16">
      <CardContent className="px-0">
        <h3 className="m-0 text-3xl font-semibold leading-tight text-[#4b5563] md:text-[40px]">
          {title}
        </h3>
        <ul className="mb-0 mt-6 list-none space-y-2 p-0 text-xl leading-9 text-[#4b5563] md:text-2xl md:leading-[44px]">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
