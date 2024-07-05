import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Subtotal } from './Subtotal'

describe('购物车的小计组件', () => {
  it('正确渲染所有的props', () => {
    const { getByText } = render(<Subtotal value={100} installments={5} />)
    expect(getByText('小计：')).toBeInTheDocument()
    expect(getByText('$100.00')).toBeInTheDocument()
    expect(getByText('5')).toBeInTheDocument()
  })

  it('值为0时，不渲染这个组件', () => {
    const { queryByText } = render(<Subtotal value={0} installments={5} />)
    expect(queryByText('小计：')).not.toBeInTheDocument()
  })

  it('如果分期付款为 0，则不呈现分期付款信息', () => {
    const { queryByText } = render(<Subtotal value={100} installments={0} />)
    expect(queryByText('最多可分')).not.toBeInTheDocument()
  })
})
