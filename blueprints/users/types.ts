import { DocumentBase, RoomBaseData } from "../documents-and-rooms/types"

export type UserStatus = 'new' | 'verified' | 'blocked'

export interface UserBaseData extends DocumentBase {
  firsName: string
  lastName: string
  email: string
}

export interface UserSystemData {
  rooms: RoomBaseData[]
  status: UserStatus
  expirationDate: string
  isAuthorized: boolean // only frontend
}

export interface User extends UserBaseData, UserSystemData {}
