'use client'
import Squares from '@/blocks/Backgrounds/Squares/Squares'
import React from 'react'

function loading() {
  return (
   <div className="absolute inset-0 w-full h-screen pointer-events-none opacity-15">
        <Squares 
          speed={0.5} 
          squareSize={40} // Adjust size as needed
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
  )
}

export default loading