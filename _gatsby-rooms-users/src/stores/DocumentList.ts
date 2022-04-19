import { DocumentListModel } from '../models/DocumentList';
import { documentService } from '../service';

function createDocumentList(service) {
  return DocumentListModel.create(
    { items: mockItems() },
    { service },
  )
}

export const documentListStore = createDocumentList(documentService);

function mockItems() {
  return [];
  // return [
  //   {
  //     id: 1,
  //     // title: 'family',
  //     createdAt: new Date('2021-02-02'),
  //     // documentTypes: [
  //     //   { alias: 'task' },
  //     // ],
  //   },
  //   {
  //     id: 2,
  //     // title: 'work',
  //     createdAt: new Date('2021-03-22'),
  //     // documentTypes: [
  //     //   { alias: 'income-fop-ua' },
  //     //   { alias: 'single-tax-report-ua' },
  //     //   { alias: 'task' },
  //     // ],
  //   },
  // ]
}
