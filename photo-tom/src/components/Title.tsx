import { Heading, IHeadingProps } from 'native-base'

type TitleProps = IHeadingProps & {
  title: string
}

export function Title({ title, ...rest }: TitleProps) {
  return (
    <>
      <Heading {...rest}>{title}</Heading>
    </>
  )
}
