import React from 'react'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
// import ListItemAvatar from '@material-ui/core/ListItemAvatar'
// import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import { observer } from 'mobx-react-lite'
import { navigate } from "gatsby"
import { getDocumentTypePath } from '../../utils/url'

type Props = {
  roomId: string
  item: {
    id: string
    alias: string
    name: string
  }
}

function DocumentTypeListItem({ roomId, item }: Props) {

  function handleClick() {
    navigate(getDocumentTypePath(roomId, item.alias))
  }

  return (
    <ListItem
      button
      divider
      onClick={handleClick}
    >
      {/*
      <ListItemAvatar>
        <Avatar src={item.image}/>
      </ListItemAvatar>
      */}
      <ListItemText primary={item.name}/>
    </ListItem>
  )
}

export default observer(DocumentTypeListItem)
