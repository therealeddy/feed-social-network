import React from 'react'

import { PencilLine } from 'phosphor-react'

import { Container } from './styles'
import { Avatar } from '..'

const Sidebar: React.FC = () => {
  return (
    <Container>
      <img
        className="cover"
        src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className="profile">
        <Avatar src="https://github.com/therealeddy.png" />
        <strong>Eduardo Mauricio</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </Container>
  )
}

export default Sidebar
