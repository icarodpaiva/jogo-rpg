import { FC } from 'react'
import * as C from './styles'
import { CharacterSides } from '../../types/CharacterSides'

type Props = {
  x: number
  y: number
  side: CharacterSides
}

export const Character: FC<Props> = ({ x, y, side }) => {
  const size = 30
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90
  }

  return (
    <C.Contianer
      size={size}
      left={x * size}
      top={y * size}
      sidePos={sides[side] ?? 0}
    ></C.Contianer>
  )
}
