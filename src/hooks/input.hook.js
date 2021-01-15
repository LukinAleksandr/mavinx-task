import { useCallback } from 'react'
import { validateInput } from '../validation/validation'

export const useInput = () => {
  const changeTextInput = useCallback((ev, callback) => {
    const str = ev.target.value
    callback((prevState) => {
      return {
        ...prevState,
        isValid: validateInput(str, prevState.validation),
        value: str,
      }
    })
  }, [])

  return { changeTextInput }
}
