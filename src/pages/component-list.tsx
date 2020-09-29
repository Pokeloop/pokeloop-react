
import * as React from 'react';
import CommonButton from '@/components/atoms/Button/CommonButton'
import Logo from '@/components/atoms/Logo'
import TheHeader from '@/components/organisms/TheHeader'

const ComponentList = () => {
  return (
    <div className="component-list">
      <CommonButton text="ボタン" size="medium" />
      <TheHeader />
    </div>
  )
}

export default ComponentList