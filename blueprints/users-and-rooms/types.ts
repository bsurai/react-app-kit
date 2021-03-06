import { UserBaseData } from '../users/types'

export type UserStatus = 'new' | 'verified' | 'blocked'



export type RoomBaseData = {
  id: number
  name: string
  author: UserBaseData
  createdAt: string
  image?: string
}


export type UserSystemData = {
  rooms: RoomBaseData[]
  status: UserStatus
  expirationDate: string
  isAuthorized: boolean // only frontend
}

export type RoomSystemData = {
  admins: UserBaseData[]
  users: UserBaseData[]
  labels: string[]
}


export type User = UserBaseData & UserSystemData
export type Room = RoomBaseData & RoomSystemData


export type Document = {
  id: number
  roomId: string
  authorId: string
  createdAt: string
  labels: string[]
}
