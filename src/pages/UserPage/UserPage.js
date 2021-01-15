import React, { useState, useEffect } from 'react'
import Input from '../../components/Input/Input'
import { useInput } from '../../hooks/input.hook'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hook'
import { editProfile } from '../../store/actions/auth'
import './user.sass'

const UserPage = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const name = useSelector((state) => state.auth.name)
  const surname = useSelector((state) => state.auth.surname)
  const role = useSelector((state) => state.auth.role)
  const customer = useSelector((state) => state.auth.customer)
  const { changeTextInput } = useInput()
  const { loading, request, msg } = useHttp()

  const [validForm, setValidForm] = useState(false)

  const [inputName, setInputName] = useState({
    value: name,
    isValid: true,
    validation: {
      required: true,
    },
  })
  const [inputSurname, setInputSurname] = useState({
    value: surname,
    isValid: true,
    validation: {
      required: true,
    },
  })
  const [inputRole, setInputRole] = useState({
    value: role,
    isValid: true,
    validation: {
      required: true,
      role: true,
    },
  })
  const [inputCustomer, setInputCustomer] = useState({
    value: customer,
    isValid: true,
    validation: {
      required: true,
    },
  })

  useEffect(() => {
    const valid =
      inputName.isValid &&
      inputSurname.isValid &&
      inputRole.isValid &&
      inputCustomer.isValid
    setValidForm(valid)
  }, [inputName, inputSurname, inputRole, inputCustomer])

  const editHandler = async () => {
    const data = await request(
      'https://prozorro.mavinx.com/api/test/edit-user',
      'POST',
      {
        name: inputName.value,
        surname: inputSurname.value,
        name_customer: inputCustomer.value,
        role: inputRole.value,
      },
      {
        Authorization: token,
      }
    )
    if (data.status) {
      dispatch(
        editProfile({
          name: data.user.name,
          surname: data.user.surname,
          customer: data.user.name_customer,
          role: data.user.role,
        })
      )
    }
  }
  return (
    <div id="edit-page">
      <h2>Edit User</h2>
      <div id="edit-form">
        <Input
          value={inputName.value}
          name="name"
          label="Name"
          type="text"
          errorMsg="Введите Имя!"
          touched={!!inputName.value}
          valid={inputName.isValid}
          onChange={(ev) => changeTextInput(ev, setInputName)}
        ></Input>
        <Input
          value={inputSurname.value}
          name="surname"
          label="Surname"
          type="text"
          errorMsg="Введите Фамилию!"
          touched={!!inputSurname.value}
          valid={inputSurname.isValid}
          onChange={(ev) => changeTextInput(ev, setInputSurname)}
        ></Input>
        <Input
          value={inputRole.value}
          name="role"
          label="Role"
          type="number"
          errorMsg="Введите Роль!"
          touched={!!inputRole.value}
          valid={inputRole.isValid}
          onChange={(ev) => changeTextInput(ev, setInputRole)}
        ></Input>
        <Input
          value={inputCustomer.value}
          name="customer"
          label="Customer"
          type="text"
          errorMsg="Введите название заказчика!"
          touched={!!inputCustomer.value}
          valid={inputCustomer.isValid}
          onChange={(ev) => changeTextInput(ev, setInputCustomer)}
        ></Input>
        <div id="buttons-block">
          <button
            className="btn btn-success"
            disabled={!validForm || loading}
            onClick={() => editHandler()}
          >
            Сохранить
          </button>
        </div>
      </div>
      <span className="error">{msg}</span>
      <NavLink to="/">Home</NavLink>
    </div>
  )
}

export default UserPage
