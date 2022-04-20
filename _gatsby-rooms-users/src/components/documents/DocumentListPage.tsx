import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from 'gatsby'
import map from 'lodash/map';

import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import DocumentListItem from './DocumentListItem'
import { getRoomIdPath } from '../../utils/url'
import { IDocumentList, IDocumentListItem } from '../../models/DocumentList';

interface Props {
  path: string
  roomId?: string
  docType?: string
  location?: any
  documentList?: IDocumentList
}

function DocumentListPage({ roomId, docType, location, documentList }: Props) {
  useEffect(() => {
    documentList.load(roomId, docType);
  });

  return (
    <>
    <Link to={getRoomIdPath(roomId)}>
      {'< Back to room'}
    </Link>
    <List
      subheader={<ListSubheader>Document Type</ListSubheader>}
    >
      {map(documentList.items, (d: IDocumentListItem) => <DocumentListItem key={d.id} item={d}/>)}
    </List>
    </>
  )
}

export default observer(DocumentListPage)
