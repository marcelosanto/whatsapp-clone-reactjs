import React from 'react'

import './index.css'

import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import CloseIcon from '@material-ui/icons/Close'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Close'

export default () => {
  return (
    <div className='chatWindow'>
      <div className='chatWindow--header'>
        <div className='chatWindow--headerinfo'>
          <img
            className='chatWindow--avatar'
            src='https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_750x421.jpg'
            alt=''
          />
          <div className='chatWindow--name'>Marcello Santos</div>
        </div>

        <div className='chatWindow--headerbuttons'>
          <div className='chatWindow--btn'>
            <SearchIcon style={{ color: '#919191' }} />
          </div>
          <div className='chatWindow--btn'>
            <AttachFileIcon style={{ color: '#919191' }} />
          </div>
          <div className='chatWindow--btn'>
            <MoreVertIcon style={{ color: '#919191' }} />
          </div>
        </div>
      </div>

      <div className='chatWindow--body'></div>

      <div className='chatWindow--footer'>
        <div className='chatWindow--pre'>
          <div className='chatWindow--btn'>
            <InsertEmoticonIcon style={{ color: '#919191' }} />
          </div>
        </div>

        <div className='chatWindow--inputarea'></div>

        <div className='chatWindow--pos'>
          <div className='chatWindow--btn'>
            <SendIcon style={{ color: '#919191' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
