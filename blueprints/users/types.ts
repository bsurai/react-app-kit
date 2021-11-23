import { RoomBaseData } from "../documents-and-rooms/types"

export type UserStatus = 'new' | 'verified' | 'blocked'

export type UserBaseData = {
  id: number
  firsName: string
  lastName: string
  email: string
}

export type UserSystemData = {
  rooms: RoomBaseData[]
  status: UserStatus
  expirationDate: string
  isAuthorized: boolean // only frontend
}

export type User = UserBaseData & UserSystemData
