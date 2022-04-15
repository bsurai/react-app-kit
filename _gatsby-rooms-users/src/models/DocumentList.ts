import { types } from 'mobx-state-tree'

export const DocumentMetadata = types.model({
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

export const DocumentListItem = types.model({
    id: types.number,
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

export const DocumentList = types.model({
    metadata: DocumentMetadata,
    items: types.optional(types.array(DocumentListItem), []),
  })
  .actions((self) => ({

    add(document) {
      self.items.push(document)
    },

    getById(id: number) {
      return self.items.find((document) => document.id === id)
    },

  }))
