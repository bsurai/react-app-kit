import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import InputLabel from '@material-ui/core/InputLabel'
import { navigate } from 'gatsby'
import { roomListStore } from '../../stores/RoomList'
import TextInput from '../base/TextInput'
import EditButton from '../base/buttons/EditButton'
import SaveButton from '../base/buttons/SaveButton'
import CloseButton from '../base/buttons/CloseButton'
import CancelButton from '../base/buttons/CancelButton'
import { getRoomLisPath } from '../../utils/url'

type Props = {
  path: string
  id?: string
}

function RoomDetails({ path, id }: Props) {
  const [isEditable, setIsEditable] = useState(false)
  const [isMutated, setIsMutated] = useState(false)

  const room = roomListStore.getById(Number(id))
  const [name, setName] = useState(room.name)

  useEffect(() => {
    setName(room.name)

    return () => {
      setIsEditable(false)
      setIsMutated(false)
    }
  }, [room])

  

  function handleClickEdit() {
    setIsEditable(true)
  }

  function handleClickSave() {
    room.changeName(name)
    setIsMutated(false)
    setIsEditable(false)
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
    setIsMutated(true)
  }

  function handleClickCancel() {
    setName(room.name)
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
        value={room?.id}
        readOnly
      />
      
      <TextInput
        label='Name'
        value={name}
        readOnly={!isEditable}
        onChange={handleChangeName}
      />

      {/* ============== Buttons ============ */}
      {showEditButton &&
      <EditButton
        onClick={handleClickEdit}
      />}

      {showSaveButton &&
      <SaveButton
        disabled={disableSaveButton}
        onClick={handleClickSave}
      />}

      {showCancelButton &&
      <CancelButton
        disabled={disableCancelButton}
        onClick={handleClickCancel}
      />}

      {showCloseButton &&
      <CloseButton
        disabled={isMutated}
        onClick={handleClickClose}
      />}
    </>
  )
}

export default observer(RoomDetails)
