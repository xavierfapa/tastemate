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
  user: User | null;
}

export type Recipie = {
  title: string
  description: string
  ingredients: string
  userId: string
  _id: string
  images: string[]
}

export type Match = {
  user1: string
  user2: string
  mutualMatch: boolean
  matchedAt: Date
};

export type Message = {
  message: string
  senderId: string
  receiverId: string
  timestamp: number
}
