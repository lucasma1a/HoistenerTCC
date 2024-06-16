import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './AlterarForm.module.css'

const AlterarForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [oldPassword, setOldPassword] = useState('')
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    fetch('http://localhost:4000/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  useEffect(() => {
    if (users.length > 0 && id) {
      const foundUser = users.find(user => user._id === id)
      if (foundUser) {
        setUser({
          email: foundUser.email,
          password: ''
        })
      }
    }
  }, [users, id])

  const handlePasswordChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      password: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(
      'http://localhost:4000/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: user.email, password: oldPassword })
      }
    ).then(async (response) => {
      if (response.status === 200) {
        fetch(`http://localhost:4000/user/${id}`, 
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          }
        ).then((r) => {
          alert('Senha alterada')
          navigate('/login') 
          return r.json()
        })
      } else {
        return response.json().then((data) => {
          throw new Error(data.message)
        })
      }
    }).catch((e) => {
      alert(e.message)
    })
  }

  return (
    <div className={style.container}>
      <h1>Alterar Senha</h1>
      <form onSubmit={handleSubmit}>
        <label>
        <b>Senha atual:</b>
          <input
            type="password"
            placeholder='Digite sua senha...'
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </label>

        <label>
          <b>Nova senha:</b>
          <input
            type="password"
            placeholder='Digite a nova senha...'
            name="password" 
            onChange={handlePasswordChange}
            required
          />
        </label>

        <button>Alterar</button>
      </form>
    </div>
  )
}

export default AlterarForm
