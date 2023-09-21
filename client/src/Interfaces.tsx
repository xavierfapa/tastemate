export type User = {
  username: string
  email: string
  password: string
};

export type userLoged = {
  email: string
  password: string
}

export interface AuthContextType {
  isAuthenticated: boolean
  signup: (user: User) => Promise<void>
  signin: (user: userLoged) => Promise<void>
}

export type Recipie = {
  title: string
  description: string
  ingredients: string
  userId: string
  _id: string
  image: []
}