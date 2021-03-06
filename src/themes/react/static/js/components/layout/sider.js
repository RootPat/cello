import React from 'react'
import { Icon, Switch } from 'antd'
import styles from './main.less'
import { config } from '../../utils'
import Menus from './menu'

function Sider ({ siderFold, darkTheme, location, changeTheme }) {
  const menusProps = {
    siderFold,
    darkTheme,
    location
  }
  return (
    <div>
      <div className={styles.logo}>
        {siderFold ? '' : <span>{config.logoText}</span>}
      </div>
      <Menus {...menusProps} />
      {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type='bulb' />Theme</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren='black' unCheckedChildren='white' />
      </div> : ''}
    </div>
  )
}

export default Sider
