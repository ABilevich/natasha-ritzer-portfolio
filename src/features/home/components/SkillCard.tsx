import { Card, CardContent } from '@/components/ui/card'

type SkillCardProps = {
  title: string
  items: string[]
}

export function SkillCard({ title, items }: SkillCardProps) {
  return (
    <Card className="rounded-3xl border-[#e5e7eb] bg-white px-6 py-9 shadow-none md:px-8 md:py-12 lg:py-16">
      <CardContent className="px-0">
        <h3 className="m-0 text-2xl font-semibold leading-tight text-[#4b5563] md:text-3xl lg:text-[40px]">
          {title}
        </h3>
        <ul className="mb-0 mt-5 list-none space-y-1.5 p-0 text-base leading-7 text-[#4b5563] md:mt-6 md:text-xl md:leading-9 lg:text-xl lg:leading-9">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
