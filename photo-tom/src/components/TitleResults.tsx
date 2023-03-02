import { Heading, IHeadingProps } from 'native-base'

type TitleResultsProps = IHeadingProps & {
  title: string
}

export function TitleResults({ title, ...rest }: TitleResultsProps) {
  return (
    <>
      <Heading color="blue.800" {...rest}>
        {title}
      </Heading>
    </>
  )
}
