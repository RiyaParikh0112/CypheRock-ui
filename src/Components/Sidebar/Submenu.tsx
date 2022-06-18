import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { isTemplateExpression } from 'typescript'

const SidebarLink = styled(Link)`
  display: flex;
  color: blue;
`

const SidebarLabel = styled.span``
type Props = {
  item: any
}

const Submenu = (props: Props) => {
  return (
    <div>
      Submenu
      {/* <SidebarLink to={item.path}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink> */}
    </div>
  )
}

export default Submenu
