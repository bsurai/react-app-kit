import React from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from 'gatsby'
import map from 'lodash/map';

import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import DocumentListItem from './DocumentListItem'
import { getRoomIdPath } from '../../utils/url'

interface Props {
  path: string
  location?: any
  documentList?: { // similar to DocumentListModel
    items?: any[]
  }
}

function DocumentListPage({ location, documentList = {} }: Props) {

  const roomId = location?.state?.roomId;
  return (
    <>
    <Link to={getRoomIdPath(roomId)}>
      {'< Back to room'}
    </Link>
    <List
      subheader={<ListSubheader>Document Type</ListSubheader>}
    >
      {map(documentList.items, (o) => <DocumentListItem key={o.id} item={o}/>)}
    </List>
    </>
  )
}

export default observer(DocumentListPage)
