import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

const About = () => {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>About</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
            Hi. I'm Paul, a full stack software engineer living in&nbsp;California. I bring
            ideas to life with design and&nbsp;code.
          </Big>
          <p>
             In my work I strive to bring unique and creative ideas while maintaining usability and structure.
          </p>
          <p>
            Currently I'm looking for a full time software engineering based role. In addition I am working on
            a side project called <Link to="/lifetime">Blu</Link> which allows gamers to connect with other
            gamers for better online multiplayer experiences.
          </p>
          <p style={{ marginBottom: 0 }}>
            Outside of code I'm passionate about my friends, family, and my surrounding culture.
            Oh and I LOVE playing games on my spare time.
          </p>
        </Fragment>
      }
    />
  )
}

export default About