'use client'
import Hero from '@/components/Hero'
import Projectcards from '@/components/Projectcards'
import React, { useEffect } from 'react'
import projectApi from './project.json'

const Project = () => {
  useEffect(() => {
    console.log(projectApi);
  }, [])
  
  return (
    
    <>
       <Projectcards/>
    </>
  )
}

export default Project