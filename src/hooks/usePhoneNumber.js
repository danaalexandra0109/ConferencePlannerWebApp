import { useApolloLocalStorage } from './apolloLocalStorage'
import { phoneNumberKey } from 'apollo/cacheKeyFunctions' // Assuming you have a phoneNumberKey defined similarly
import { useCallback } from 'react'

export const usePhoneNumber = () => {
  const [{ phoneNumber }, setPhoneNumberValue] = useApolloLocalStorage(phoneNumberKey)

  const setPhoneNumber = useCallback(phoneNumberValue => setPhoneNumberValue({ phoneNumber: phoneNumberValue }), [setPhoneNumberValue])

  return [phoneNumber, setPhoneNumber]
}
