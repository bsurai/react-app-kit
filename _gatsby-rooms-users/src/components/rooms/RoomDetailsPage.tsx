import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { navigate } from 'gatsby'
import map from 'lodash/map'

import InputLabel from '@material-ui/core/InputLabel'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import TextInput from '../base/TextInput'
import EditButton from '../base/buttons/EditButton'
import SaveButton from '../base/buttons/SaveButton'
import CloseButton from '../base/buttons/CloseButton'
import CancelButton from '../base/buttons/CancelButton'
import DocumentTypeListItem from '../documents/DocumentTypeListItem'

import { roomListStore } from '../../stores/RoomList'
import { getRoomLisPath } from '../../utils/url'
import { IRoomDetail } from '../../models/RoomDetail'

type Props = {
  path: string
  roomId?: string
  roomDetail: IRoomDetail // similar to RoomDetailModel
}

function RoomDetailsPage({ roomId, roomDetail }: Props) {
  const [isEditable, setIsEditable] = useState(false)
  const [isMutated, setIsMutated] = useState(false)
  const [name, setName] = useState(roomDetail.name)

  useEffect(() => {
    roomDetail.load(roomId)
  }
  , [roomId])

  useEffect(() => {
    setName(roomDetail.name)

    return () => {
      setIsEditable(false)
      setIsMutated(false)
    }
  }, [roomDetail])

  function handleClickEdit() {
    setIsEditable(true)
  }

  function handleClickSave() {
    roomDetail.changeName(name)
    setIsMutated(false)
    setIsEditable(false)
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
    setIsMutated(true)
  }

  function handleClickCancel() {
    setName(roomDetail.name)
    setIsMutated(false)
    setIsEditable(false)
  }

  function handleClickClose() {
    navigate(getRoomLisPath())
  }

  const showEditButton = !isEditable
  const showSaveButton = isEditable
  const showCancelButton = isEditable
  const showCloseButton = !isEditable

  const disableSaveButton = !isMutated
  const disableCancelButton = !isMutated

  return (
    <>
      <InputLabel>Room</InputLabel>

      <TextInput
        label='ID'
        value={roomDetail.id}
        readOnly
      />
      
      <TextInput
        label='Name'
        value={name}
        readOnly={!isEditable}
        onChange={handleChangeName}
      />

      {/* ============== Buttons ============ */}
      <EditButton
        display={showEditButton}
        onClick={handleClickEdit}
      />

      <SaveButton
        display={showSaveButton}
        disabled={disableSaveButton}
        onClick={handleClickSave}
      />

      <CancelButton
        display={showCancelButton}
        disabled={disableCancelButton}
        onClick={handleClickCancel}
      />

      <CloseButton
        display={showCloseButton}
        disabled={isMutated}
        onClick={handleClickClose}
      />

      {/* ========= Document Types ========= */}
      <List
        subheader={<ListSubheader>Docements</ListSubheader>}
      >
        {map(roomDetail.documentTypes, (o) => 
        <DocumentTypeListItem
          key={o.alias}
          roomId={roomId}
          item={o}
        />)}
      </List>
    </>
  )
}

export default observer(RoomDetailsPage)
