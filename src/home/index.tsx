import { Post, Sidebar } from '../components'
import { PostProps } from '../components/Post'

import { Container } from './styles'

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/therealeddy.png',
      name: 'Eduardo Mauricio',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maiws.png',
      name: 'Maiara S Dias',
      role: 'C# Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-25 20:00:00'),
  },
]

function Home() {
  return (
    <Container>
      <div className="wrapper">
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={String(post.id)} {...post} />
          ))}
        </main>
      </div>
    </Container>
  )
}

export default Home
