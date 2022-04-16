import { DocumentTypeListModel } from '../models/DocumentTypeList'

export const documentTypeListStore = DocumentTypeListModel.create({
  items: mockItems(),
})

function mockItems() {
  return [
    {
      id: 1,
      name: 'Income',
      alias: 'income-fop-ua',
      createdAt: new Date('2021-02-02'),
    },
    {
      id: 2,
      name: 'Tax Report',
      alias: 'single-tax-report-ua',
      createdAt: new Date('2021-03-23'),
    },
    {
      id: 3,
      name: 'Tasks',
      alias: 'task',
      createdAt: new Date('2021-03-24'),
    },
  ]
}
