import { LoaderFunctionArgs } from 'react-router-dom'

export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem('expiration')

  if (!storedExpirationDate) {
    return 0
  }

  const expirationDate = new Date(storedExpirationDate)
  const now = new Date()
  const duration = expirationDate.getTime() - now.getTime()
  return duration
}

export const getAuthToken = () => {
  const token = localStorage.getItem('token')

  if (!token) {
    return null
  }

  const tokenDuration = getTokenDuration()

  if (tokenDuration < 0) {
    return 'EXPIRED'
  }
  return token
}

export const tokenLoader = async (
  args: LoaderFunctionArgs<any>
): Promise<any> => {
  const authToken = getAuthToken()

  return authToken || null
}
