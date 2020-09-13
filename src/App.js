import React, { useState, useEffect } from 'react'

import './App.css'

import ChatListItem from './components/ChatListItem'

import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'

function App() {
  const [chatList, setChatList] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ])

  return (
    <div className='app-window'>
      <div className='sidebar'>
        <header>
          <img
            className='header--avatar'
            src='data:image/png;base64,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'
            alt='Avatar'
          />
          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className='header--btn'>
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className='header--btn'>
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>
        <div className='search'>
          <div className='search--input'>
            <SearchIcon fontSize='small' style={{ color: '#919191' }} />
            <input
              type='search'
              placeholder='Procurar ou começar uma nova conversa'
            />
          </div>
        </div>

        <div className='chatlist'>
          {chatList.map((item, key) => (
            <ChatListItem key={key} />
          ))}
        </div>
      </div>

      <div className='contentarea'>...</div>
    </div>
  )
}

export default App
