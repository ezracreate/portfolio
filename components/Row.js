import { WorkGridItem } from './grid-item'
import Section from './section'

const Card = ({ id = '', title = '', description = '', image = '' }) => (
  <Section delay={0.1}>
    <WorkGridItem id={id ?? ''} title={title ?? ''} thumbnail={image ?? ''}>
      {description ?? ''}
    </WorkGridItem>
  </Section>
)

export default Card
