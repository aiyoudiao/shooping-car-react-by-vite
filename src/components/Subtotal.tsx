import { FC } from 'react'
import { BigMath } from '../shared/utils'
import React from 'react'

export interface SubtotalProps {
  value: number
  installments: number
  installmentsAmount?: number
}

export const Subtotal: FC<SubtotalProps> = props => {
  if (!props.value) {
    return null
  }

  let installmentsAmount: string | undefined

  if (props.installments) {
    installmentsAmount = BigMath.divide(props.value, props.installments)
  }

  return (
    <div className="flex items-center mb-4 flex-wrap">
      <div className="flex-1 text-lg font-semibold">小计：</div>
      <div className="flex-1 text-right text-lg font-bold ">${props.value.toFixed(2)}</div>
      {installmentsAmount && (
        <div className="text-right ml-2 text-sm w-full">
          最多可分 <span className="font-bold text-orange-500">{props.installments}</span> 期{' '}
          <span className="font-bold text-green-500">${installmentsAmount}</span> /月
        </div>
      )}
    </div>
  )
}
