import NextLink from 'next/link'
import { useState } from 'react'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt, props }) => {
  const [hideImage, setHideImage] = useState(false)
  return (
    !hideImage && (
      <Image
        {...props}
        borderRadius="lg"
        w="full"
        src={src}
        alt={alt}
        mb={4}
        onError={() => {
          setHideImage(true)
        }}
      />
    )
  )
}

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
