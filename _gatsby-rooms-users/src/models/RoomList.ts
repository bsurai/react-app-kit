import { types } from 'mobx-state-tree'
import { DocumentType } from '../../../blueprints/documents-and-rooms/types'

// export const data: Room = {
//   id: 1,
//   name: 'Family',
//   author: {} as any,
//   admins: [],
//   users: [],
//   labels: ['test', 'private'],
//   createdAt: '2021-04-06 12:43:00'
// }

// type Room2 = {
//   id: number
//   name: string
//   authorId: number
//   createdAt: string
//   // adminIds: any[]
//   // userIds: any[]
//   // labels: any[]
// }
export const RoomDocumentTypeModel = types.model({
  alias: types.string,
})

export const RoomListItemModel = types.model({
    id: types.number,
    name: types.string,
    image: types.optional(types.string, ''),
    createdAt: types.Date,
    documentTypes: types.optional(types.array(RoomDocumentTypeModel), []),
  })
  .actions((self) => ({

    changeName(newName: string) {
      self.name = newName
    },

  }))

export const RoomListModel = types.model({
    items: types.optional(types.array(RoomListItemModel), []),
  })
  .actions((self) => ({

    add(room) {
      self.items.push(room)
    },

    getById(id: number) {
      return self.items.find((room) => room.id === id)
    },

  }))
