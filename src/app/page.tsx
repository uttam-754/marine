import React from 'react'
import Menu from './menu/page'
import Display from '@/app/display/page'
import MainItems from './service/page'
import Today_deal from './deal/page'
const page = () => {
  return (
    <>
      <Menu/>
      <Display/>
      <MainItems/>
      <Today_deal/>
    </>
  )
}

export default page
