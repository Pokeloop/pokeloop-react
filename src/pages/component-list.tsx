
import * as React from 'react';
import CommonButton from '@/components/Atoms/Button/CommonButton'
import Logo from '@/components/Atoms/Logo'
const ComponentList = () => {
  return (
    <div className="component-list">
      <CommonButton text="ボタン" />
      <Logo />
    </div>
  )
}

export default ComponentList