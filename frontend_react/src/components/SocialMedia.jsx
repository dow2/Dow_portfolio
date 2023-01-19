import React from 'react';
import { BsGithub, BsLinkedin, BsMailbox2 } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          href='https://github.com/dow2'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href='https://www.linkedin.com/in/dow-edwards2/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href='https://docs.google.com/document/d/1zfxKAKswLM62zjBXFFl7DhtGucCy1xu46fogGJfT0iI/edit?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsMailbox2 />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
