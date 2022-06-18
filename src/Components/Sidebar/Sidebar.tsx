import React from 'react'
import './Sidebar.css'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div>
      <div className='sidebar'>
        <div className='sidebar_data'>
          <ul>Portfolio</ul>
          <ul>Wallets</ul>
          <ul>Last Transactions</ul>
          <ul>Tutorials</ul>
          <ul>Settings</ul>
        </div>

        <div className='sidebar_support'>
          <button>Support</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
