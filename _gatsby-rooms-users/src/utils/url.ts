export function getRoomIdPath(id: string) {
  return `/app/room/${id}`
}

export function getRoomLisPath() {
  return '/app/rooms'
}

export function getDocumentTypePath(roomId: string, docType: string) {
  return `/app/room/${roomId}/doc/${docType}`
}
