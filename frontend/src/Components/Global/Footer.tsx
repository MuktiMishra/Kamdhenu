import React from 'react'

interface FooterProps{
    children?: React.ReactNode;
}
const Footer: React.FC<FooterProps> = ({children}) => {
  return (
    <div>
        <div className='w-screen bg-[#0127FF70]'>

        </div>
      
    </div>
  )
}

export default Footer
