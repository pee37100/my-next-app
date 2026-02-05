// app/blog/[slug]/page.tsx
type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostddd({ params }: Props) {
  const { slug } = await params
  const thaiSlug = decodeURIComponent(slug)
  return (
    <article className="p-8">
      <h1 className="text-3xl font-bold">

        บทความ: {thaiSlug}

      </h1>
    </article>
  )
}