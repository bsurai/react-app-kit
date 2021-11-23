import { UserBaseData } from '../users/types'

export type Label = {
  text: string
  color: string
}

export type RoomBaseData = {
  id: number
  name: string
  author: UserBaseData
  createdAt: string
  image?: string
}

export type RoomSystemData = {
  admins: UserBaseData[]
  users: UserBaseData[]
  labels: Label[]
}

export type Room = RoomBaseData & RoomSystemData

export type Document = {
  id: number
  roomId: string
  authorId: string
  createdAt: string
  labels: Label[]
}
