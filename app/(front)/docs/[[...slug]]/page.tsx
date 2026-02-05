// app/docs/[...slug]/page.tsx
type Props = {
  params: Promise<{ slug: string[] }>
}

export default async function DocsPage({ params }: Props) {
  const { slug } = await params
  // URL: /docs/getting-started/installation
  // slug = ['getting-started', 'installation']
  
  return (
    <div>
      <h1>Documentation Page</h1>
     {slug ? <p>Path: {slug.join(' > ')}</p> : <p>No specific document selected.</p> }
    </div>
  )
}