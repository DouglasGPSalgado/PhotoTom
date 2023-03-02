interface Response {
  token: string
  user: {
    id: number
    email: string
  }
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '32132343414',
        user: {
          id: 2,
          email: 'douglas@gmail.com',
        },
      })
    }, 2000)
  })
}
