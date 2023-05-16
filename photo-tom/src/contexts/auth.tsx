import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
  useContext,
  PureComponent,
} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../services/api'

interface AuthContextData {
  signed: boolean
  user: {
    email: string
  } | null
  loading: boolean
  signIn: (data: any) => void
  signOut: () => void
  userId: number | null
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<null>(null)
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<number | null>(null)

  useEffect(() => {
    setLoading(true)
    async function LoadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@PTAuth:user')
      const storagedToken = await AsyncStorage.getItem('@PTAuth:token')

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser))
      }

      await api
        .get('auth/user', {
          headers: { Authorization: 'Token ' + storagedToken },
        })
        .then((resp) => {
          setUserId(resp.data.id)
        })
        .catch((error) => {
          if (error.response.status === 401) {
            signOutLater()
          }
        })
      setLoading(false)
    }
    LoadStoragedData()
  }, [])

  async function signIn(data: any) {
    setUser(data.user)
    await AsyncStorage.setItem('@PTAuth:user', JSON.stringify(data.user))
    await AsyncStorage.setItem('@PTAuth:token', data.token)
  }
  async function signOut() {
    try {
      const token = await AsyncStorage.getItem('@PTAuth:token')
      await api.post(
        'auth/logout',
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      )
      AsyncStorage.clear().then(() => {
        setUser(null)
      })
    } catch (error) {
      console.error(error)
    }
  }
  async function signOutLater() {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, loading, signOut, userId }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
