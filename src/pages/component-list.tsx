
import * as React from 'react';
import CommonButton from '@/components/atoms/Button/CommonButton.tsx'
import Logo from '@/components/atoms/Logo.tsx'
import TheHeader from '@/components/organisms/TheHeader'

const ComponentList = () => {
  return (
    <div className="component-list">
      <CommonButton text="ボタン" size="medium" />
    </div>
  )
}

export default ComponentList