import React, { useState, useEffect } from 'react'
import './registraton.sass'
import Input from '../../components/Input/Input'
import { NavLink, useHistory } from 'react-router-dom'
import { useInput } from '../../hooks/input.hook'
import { useHttp } from '../../hooks/http.hook'

const RegistrationPage = () => {
  const history = useHistory()
  const { changeTextInput } = useInput()
  const { loading, request, msg } = useHttp()
  const [validForm, setValidForm] = useState(false)
  const [name, setName] = useState({
    value: '',
    isValid: false,
    validation: {
      required: true,
    },
  })
  const [surname, setSurname] = useState({
    value: '',
    isValid: false,
    validation: {
      required: true,
    },
  })
  const [nameCustomer, setNameCustomer] = useState({
    value: '',
    isValid: false,
    validation: {
      required: true,
    },
  })
  const [email, setEmail] = useState({
    value: '',
    isValid: false,
    validation: {
      required: true,
      email: true,
    },
  })
  const [phone, setPhone] = useState({
    value: '',
    isValid: false,
    validation: {
      required: true,
      phone: true,
    },
  })
  const [role, setRole] = useState({
    value: '',
    isValid: false,
    validation: {
      required: true,
      role: true,
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
  const [passConfirm, setPassConfirm] = useState({
    value: '',
    isValid: false,
    validation: {
      required: true,
      pass: true,
    },
  })
  useEffect(() => {
    const valid =
      name.isValid &&
      surname.isValid &&
      nameCustomer.isValid &&
      email.isValid &&
      phone.isValid &&
      role.isValid &&
      pass.isValid &&
      passConfirm.isValid
    setValidForm(valid)
  }, [name, surname, nameCustomer, email, phone, role, pass, passConfirm])

  useEffect(() => {
    if (role.value === '1') {
      setNameCustomer((prev) => ({
        ...prev,
        validation: {
          empty: true,
        },
      }))
    } else {
      setNameCustomer((prev) => ({
        ...prev,
        validation: {
          required: true,
        },
      }))
    }
  }, [role])

  const registerHandler = async () => {
    // const formData = new FormData()
    // formData.append('name', name.value)
    // formData.append('surname', surname.value)
    // formData.append('name_customer', nameCustomer.value)
    // formData.append('email', email.value)
    // formData.append('phone', phone.value)
    // formData.append('role', role.value)
    // formData.append('password', pass.value)
    // formData.append('password_confirmation', passConfirm.value)

    const data = await request(
      'https://prozorro.mavinx.com/api/test/register',
      'POST',
      {
        name: name.value,
        surname: surname.value,
        name_customer: nameCustomer.value,
        email: email.value,
        phone: phone.value,
        role: role.value,
        password: pass.value,
        password_confirmation: passConfirm.value,
      }
    )
    if (data.status) {
      setTimeout(() => {
        history.push('/')
      }, 1500)
    }
  }
  return (
    <div id="reg-page">
      <h2>Registration</h2>
      <div id="reg-form">
        <Input
          value={name.value}
          name="name"
          label="Name"
          type="text"
          errorMsg="Введите имя!"
          touched={!!name.value}
          valid={name.isValid}
          onChange={(ev) => changeTextInput(ev, setName)}
        ></Input>
        <Input
          value={surname.value}
          name="surname"
          label="Surname"
          touched={!!surname.value}
          type="text"
          errorMsg="Введите фамилию!"
          valid={surname.isValid}
          onChange={(ev) => changeTextInput(ev, setSurname)}
        ></Input>
        <Input
          value={nameCustomer.value}
          name="сustomer"
          label="Сustomer"
          errorMsg="Неверное имя заказчика!"
          touched={!!nameCustomer.value}
          type="text"
          valid={nameCustomer.isValid}
          onChange={(ev) => changeTextInput(ev, setNameCustomer)}
        ></Input>
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
          value={phone.value}
          name="phone"
          label="Phone"
          type="number"
          errorMsg="Введите телефон!"
          touched={!!phone.value}
          valid={phone.isValid}
          onChange={(ev) => changeTextInput(ev, setPhone)}
        ></Input>
        <Input
          value={role.value}
          name="role"
          label="Role"
          type="number"
          errorMsg="Введите роль!"
          touched={!!role.value}
          valid={role.isValid}
          onChange={(ev) => changeTextInput(ev, setRole)}
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
        <Input
          value={passConfirm.value}
          name="pass"
          label="Pass Confirm"
          type="password"
          errorMsg="Повторите пароль!"
          touched={!!passConfirm.value}
          valid={passConfirm.isValid}
          onChange={(ev) => changeTextInput(ev, setPassConfirm)}
        ></Input>
        <div id="buttons-block">
          <button
            className="btn btn-success"
            disabled={!validForm || loading}
            onClick={() => registerHandler()}
          >
            Регистрация
          </button>
        </div>
      </div>
      <span className="error">{msg}</span>
      <NavLink to="/">Authorization</NavLink>
    </div>
  )
}

export default RegistrationPage
