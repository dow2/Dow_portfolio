import React from 'react'
import { BsGithub, BsLinkedin, BsMailbox2} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsMailbox2 />
      </div>
    </div>
  )
}

export default SocialMedia