import Post from '@/components/screens/Post/Post'

interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
}

export default async function Home() {
  return (
    <main>
     <Post />
    </main>
  )
}
