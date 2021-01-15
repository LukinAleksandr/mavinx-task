import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './auth.sass'
import { authSuccess } from '../../store/actions/auth'
import { useInput } from '../../hooks/input.hook'
import { useHttp } from '../../hooks/http.hook'
import { NavLink } from 'react-router-dom'
import Input from '../../components/Input/Input'

const AuthPage = () => {
  const { changeTextInput } = useInput()
  const dispatch = useDispatch()
  const { loading, request, msg } = useHttp()
  const [validForm, setValidForm] = useState(false)

  const [email, setEmail] = useState({
    value: '',
    isValid: false,
    validation: {
      required: true,
      email: true,
    },
  })
  const [pass, setPass] = useState({
    value: '',
    isValid: false,
    validation: {
      required: true,
      pass: true,
    },
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    const name = localStorage.getItem('name')
    const surname = localStorage.getItem('surname')
    const customer = localStorage.getItem('customer')
    const role = localStorage.getItem('role')

    if (token) {
      dispatch(
        authSuccess({
          token,
          name,
          customer,
          surname,
          role,
        })
      )
    }
  }, [dispatch])

  useEffect(() => {
    const valid = email.isValid && pass.isValid
    setValidForm(valid)
  }, [email, pass])

  const authHandler = async () => {
    const data = await request(
      'https://prozorro.mavinx.com/api/test/login',
      'POST',
      {
        email: email.value,
        password: pass.value,
      }
    )
    if (data.status) {
      dispatch(
        authSuccess({
          token: data.token,
          name: data.user.name,
          customer: data.user.name_customer,
          surname: data.user.surname,
          role: data.user.status,
        })
      )
    }
  }
  return (
    <div id="auth-page">
      <h2>Authorization</h2>
      <div id="auth-form">
        <Input
          value={email.value}
          name="email"
          label="Email"
          type="email"
          errorMsg="Введите Email!"
          touched={!!email.value}
          valid={email.isValid}
          onChange={(ev) => changeTextInput(ev, setEmail)}
        ></Input>
        <Input
          value={pass.value}
          name="pass"
          label="Pass"
          type="password"
          errorMsg="Введите пароль!"
          touched={!!pass.value}
          valid={pass.isValid}
          onChange={(ev) => changeTextInput(ev, setPass)}
        ></Input>
        <div id="buttons-block">
          <button
            className="btn btn-success"
            disabled={!validForm || loading}
            onClick={() => authHandler()}
          >
            Регистрация
          </button>
        </div>
      </div>
      <span className="error">{msg}</span>
      <NavLink to="/registration">Registration</NavLink>
    </div>
  )
}

export default AuthPage
