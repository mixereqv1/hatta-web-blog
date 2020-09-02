import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 35px;
`;

const StyledH1 = styled.h1`
  width: 550px;
  font-size: ${({ theme }) => theme.font.size.header};
  text-align: right;
`;

const StyledParagraph = styled.p`
  width: 300px;
  color: ${({ theme }) => theme.grey100};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  text-align: right;
`;

const StyledImg = {
  height: '100vh',
  objectFit: 'cover',
};

const IndexPage = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <StyledWrapper>
      <ContentWrapper>
        <StyledH1>Your new space</StyledH1>
        <StyledParagraph>While artists work from real to the abstract, architects must work from the abstract to the real. </StyledParagraph>
        <Button>estimate project</Button>
      </ContentWrapper>
      <Image fluid={fluid} style={StyledImg} />
    </StyledWrapper>
  );
};

export const heroImageQuery = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
