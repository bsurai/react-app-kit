import { DocumentTypeList } from '../models/DocumentTypeList'

export const documentTypeListStore = DocumentTypeList.create({
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
      createdAt: new Date('2021-03-25'),
    },
    {
      id: 3,
      name: 'Tasks',
      alias: 'task',
      createdAt: new Date('2021-03-25'),
    },
  ]
}
