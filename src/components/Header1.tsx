import React from 'react'
import { spectralBridgeRegular } from '@/fonts/font'

type Header = {
    text: string;
    as?: "h1" | "span";
}

function Header1({ text, as: Tag = "h1" }: Header) {
  return (
    // USED FOR HERO SECTION
    <Tag className={`${spectralBridgeRegular.className} block text-[16vw] leading-[1] mb-[-.25em]`}>{text}</Tag>
  )
}

export default Header1
