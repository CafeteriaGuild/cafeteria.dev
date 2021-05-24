import React from 'react';
import cn from 'classnames'
import {CanecoAuto} from './Caneco.module.scss';

export default function Caneco({ dark, orange, ...props }) {
  function img(src, className) {
    return <img
      src={src}
      alt="Cafeteria Logo"

      {...props}

      className={cn(className, props.className)}
    />
  }

  if (dark) {
    return img('/caneco-dark.svg')
  }

  if (orange) {
    return img('/caneco.svg')
  }

  return (
    <>
      { img('/caneco.svg', CanecoAuto) }
      { img('/caneco-dark.svg', CanecoAuto) }
    </>
  )
}
