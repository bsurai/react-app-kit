export type UserStatus = 'new' | 'verified' | 'blocked'

export type UserBaseData = {
  id: number
  firsName: string
  lastName: string
  email: string
}

export type UserSystemData = {
  rooms: Room[]
  status: UserStatus
  expirationDate: string
  isAuthorized: boolean // only frontend
}

export type User = UserBaseData & UserSystemData

export type Room = {
  id: number
  name: string
  author: Partial<UserBaseData>
  createdAt: string
  admins: Partial<UserBaseData>[]
  users: Partial<UserBaseData>[]
  labels: string[]
}

export type Document = {
  id: number
  roomId: string
  authorId: string
  createdAt: string
  labels: string[]
}
