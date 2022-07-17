import { Timer } from './style';

interface Props {
  tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
  return (
    <>
        <Timer>{tempo}</Timer>
    </>
  )
}