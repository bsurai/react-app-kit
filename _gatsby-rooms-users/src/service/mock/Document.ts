import { filter, find, pick } from 'lodash';

const documents: any[] = [
  // work
  { roomId: '2', docType: 'income-fop-ua', doc: { id: '1', name: 'June', createdAt: new Date('2021-02-02') } },
  { roomId: '2', docType: 'income-fop-ua', doc: { id: '2', name: 'February', createdAt: new Date('2021-02-02') } },
  { roomId: '2', docType: 'single-tax-report-ua', doc: { id: '3', name: 'June', createdAt: new Date('2021-02-02') } },
  { roomId: '2', docType: 'single-tax-report-ua', doc: { id: '4', name: 'Februrary', createdAt: new Date('2021-02-02') } },
  { roomId: '2', docType: 'task', doc: { id: '5', name: 'Call', createdAt: new Date('2021-02-02') } },
  { roomId: '2', docType: 'task', doc: { id: '6', name: 'Meet up', createdAt: new Date('2021-02-02') } },

  // family
  { roomId: '1', docType: 'task', doc: { id: '1', name: 'wake up', createdAt: new Date('2021-02-02') } },
  { roomId: '1', docType: 'task', doc: { id: '2', name: 'walk', createdAtcreatedAt: new Date('2021-02-02') } },
  { roomId: '1', docType: 'task', doc: { id: '3', name: 'go to bade', createdAt: new Date('2021-02-02') } },
];

async function getList(roomId: string, docType: string) {
  return filter(documents, (d) => d.roomId === roomId && d.docType === docType)
    .map((d) => pick(d.doc, ['id', 'name', 'createdAt']));
}

async function getById(id: string) {
  return find(documents, (d) => d.id === id);
}

export const documentService = {
  getList,
  getById,
}
