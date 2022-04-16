import { DocumentList } from '../models/DocumentList'

export const documentListStore = DocumentList.create({
  items: mockItems(),
})

function mockItems() {
  return [
    {
      id: 1,
      // title: 'family',
      createdAt: new Date('2021-02-02'),
      // documentTypes: [
      //   { alias: 'task' },
      // ],
    },
    {
      id: 2,
      // title: 'work',
      createdAt: new Date('2021-03-25'),
      // documentTypes: [
      //   { alias: 'income-fop-ua' },
      //   { alias: 'single-tax-report-ua' },
      //   { alias: 'task' },
      // ],
    },
  ]
}
