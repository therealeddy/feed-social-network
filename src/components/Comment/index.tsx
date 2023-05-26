import React, { useState } from 'react'

import { Container } from './styles'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '..'

interface Props {
  content: string
  onDeleteComment: (comment: string) => void
}

const Comment: React.FC<Props> = ({ content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0)

  return (
    <Container>
      <Avatar hasBorder={false} src="https://github.com/therealeddy.png" />
      <div className="comment-box">
        <div className="comment-content">
          <header>
            <div className="author-and-time">
              <strong>Eduardo Mauricio</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>
            <button
              title="Deletar comentário"
              onClick={() => onDeleteComment(content)}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button
            type="button"
            onClick={() => setLikeCount((state) => state + 1)}
          >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </Container>
  )
}

export default Comment
