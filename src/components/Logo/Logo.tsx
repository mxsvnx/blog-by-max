import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <span
      className={clsx('font-bold text-2xl text-white', className)}
      style={{ display: 'inline-block', height: '34px', lineHeight: '34px' }}
    >
      Blog by Max
    </span>
  )
}
