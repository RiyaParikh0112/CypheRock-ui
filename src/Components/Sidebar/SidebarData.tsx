import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
type Props = {
  item: any
}

const SidebarData = (props: Props) => {
  return [
    {
      name: 'Portfolio',
      path: './portfolio',
    },
    {
      name: 'Wallets',
      path: './Wallets',
      subNav: [
        {
          wallet: 'Wallet 1',
          path: './wallets',
        },
        { wallet: 'Wallet 2', path: './wallets' },
      ],
    },
    {
      name: 'Last Transactions',
      path: './transaction',
    },
    {
      name: 'Tutorials',
      path: './Tutorials',
      subNav: [
        {
          tutorial: 'How to send',
          path: './tut1',
        },
        { tutorial: 'How to receive', path: './tut2' },
      ],
    },
    {
      name: 'Settings',
      path: './settings',
    },
  ]
}

export default SidebarData
