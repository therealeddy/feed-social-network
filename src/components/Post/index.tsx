import React, { ChangeEvent, FormEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar, Comment } from '..'

import { Container } from './styles'

export interface PostProps {
  id: number
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: {
    type: 'paragraph' | 'link'
    content: string
  }[]
  publishedAt: Date
}

const Post: React.FC<PostProps> = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState(['Post muito banaca, hein!?'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormat = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault()

    if (newCommentText) {
      setComments((state) => [...state, newCommentText])
      setNewCommentText('')
    }
  }

  function handleNewCommentInvalid(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    setComments((state) =>
      state.filter((comment) => comment !== commentToDelete),
    )
  }

  return (
    <Container>
      <header>
        <div className="author">
          <Avatar src={author.avatarUrl} />
          <div className="author-info">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="content">
        {content.map((item) =>
          item.type === 'paragraph' ? (
            <p key={String(item.content)}>{item.content}</p>
          ) : (
            item.type === 'link' && (
              <p key={String(item.content)}>
                <a href="#">{item.content}</a>
              </p>
            )
          ),
        )}
      </div>

      <form onSubmit={handleCreateNewComment} className="comment-form">
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          onChange={(e) => {
            e.target.setCustomValidity('')
            setNewCommentText(e.target.value)
          }}
          placeholder="Deixe um comentário"
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={!newCommentText}>
            Publicar
          </button>
        </footer>
      </form>

      <div className="comment-list">
        {comments.map((comment) => (
          <Comment
            key={String(comment)}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </Container>
  )
}

export default Post
