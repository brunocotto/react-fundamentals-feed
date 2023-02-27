import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    // com o state consigo acessar o último valor do estado, 0, 1, 2...
    // para atualizar o valor atual de likes, precisamos do valor anterior
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://github.com/brunocotto.png" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Otto</strong>
              <time title='24 de fevereiro ás 08:42h' dateTime='2023-02-24 08:42:30'>Publicado há 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deleter Comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
      
        <footer>    
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}