import { types, Instance } from 'mobx-state-tree'
import { DocumentType } from '../../../blueprints/documents-and-rooms/types'

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

export interface IRoomDocumentType extends Instance<typeof RoomDocumentTypeModel> {}
export interface IRoomListItem extends Instance<typeof RoomListItemModel> {}
export interface IRoomList extends Instance<typeof RoomListModel> {}
