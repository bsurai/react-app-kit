import { types, Instance } from 'mobx-state-tree'

export const DocumentTypeListItemModel = types.model({
    id: types.string,
    name: types.string,
    alias: types.string,
    image: types.optional(types.string, ''),
    createdAt: types.Date,
  })
  .actions((self) => ({
    // changeName(newName: string) {
    //   self.name = newName
    // },
  }))

export const DocumentTypeListModel = types.model({
    items: types.optional(types.array(DocumentTypeListItemModel), []),
  })
  .actions((self) => ({

    add(documentType) {
      self.items.push(documentType)
    },

    getById(id: string) {
      return self.items.find((documentType) => documentType.id === id)
    },

  }))

  export interface IRoomDocumentTypeListItem extends Instance<typeof DocumentTypeListItemModel> {}
