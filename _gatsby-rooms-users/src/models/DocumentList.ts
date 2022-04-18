import { types } from 'mobx-state-tree'

export const DocumentMetadataModel = types.model({
  // id: types.number,
  // name: types.string,
  // alias: types.string,
  // image: types.optional(types.string, ''),
  // createdAt: types.Date,
})
.actions((self) => ({
  // changeName(newName: string) {
  //   self.name = newName
  // },
}))

export const DocumentListItemModel = types.model({
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

export const DocumentListModel = types.model({
    metadata: types.optional(DocumentMetadataModel, {}),
    items: types.optional(types.array(DocumentListItemModel), []),
  })
  .actions((self) => ({

    add(document) {
      self.items.push(document)
    },

    getById(id: string) {
      return self.items.find((document) => document.id === id)
    },

  }))
