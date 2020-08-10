import React, { Fragment } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'

const Header = ({ user })=>(
  <Card>
    <div className="p-grid">
      <div className="p-col">
        <h2><i style={{ fontSize: '22px' }} className="pi pi-file"></i> Quiz</h2>
      </div>
      <div className="p-col" style={{ textAlign: 'right' }}>
        { user?
          <Fragment>
            <ul className="menu">
              <li>Welcome { user.firstname } { user.lastname }</li>
              <li>
                <Button label="logout" />
              </li>
            </ul>
          </Fragment>
        :null }
      </div>
    </div>
  </Card>
)

export default Header
