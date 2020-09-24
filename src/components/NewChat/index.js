import React, { useState, useEffect } from 'react'
import './index.css'

import Api from '../../Api'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default ({ user, chatlist, show, setShow }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    const getList = async () => {
      if (user !== null) {
        let results = await Api.getContactList(user.id)
        setList(results)
      }
    }
    getList()
  }, [user])

  const handleClose = () => {
    setShow(false)
  }

  const addNewChat = async (user2) => {
    await Api.addNewChat(user, user2)

    handleClose()
  }

  return (
    <div className='newChat' style={{ left: show ? 0 : -415 }}>
      <div className='newChat--head'>
        <div onClick={handleClose} className='newChat--button'>
          <ArrowBackIcon style={{ color: '#FFFFFF' }} />
        </div>
        <div className='newChat--headtitle'>Nova Conversa</div>
      </div>
      <div className='newChat--list'>
        {list.map((item, key) => (
          <div
            onClick={() => addNewChat(item)}
            className='newChat--item'
            key={key}
          >
            <img className='newChat--itemavatar' src={item.image} alt='' />
            <div className='newChat--itemname'>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
