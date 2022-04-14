import React from 'react'
import { Link } from "gatsby"
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { observer } from 'mobx-react-lite'
import DocumentListItem from './DocumentListItem'
import map from 'lodash/map';
import { getRoomIdPath } from '../../utils/url'


interface Props {
  path: string
  location?: any
  documentList?: {
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
      subheader={<ListSubheader>Rooms</ListSubheader>}
    >
      {map(documentList.items, (o) => <DocumentListItem key={o.id} item={o}/>)}
    </List>
    </>
  )
}

export default observer(DocumentListPage)
