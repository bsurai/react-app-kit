import { types } from 'mobx-state-tree'
import { DocumentType } from '../../../blueprints/documents-and-rooms/types'

export const RoomDocumentTypeModel = types.model({
  alias: types.string,
})

export const RoomDetailModel = types.model({
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
