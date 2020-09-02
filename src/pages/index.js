import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.layout.mobileSidesPadding};

  ${({ theme }) => theme.mq.tablet} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.tablet} {
    justify-content: center;
    align-items: flex-end;
    padding-right: 35px;
  }
`;

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.font.size.phoneHeader};
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.header};
    width: 550px;
    text-align: right;
  }
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.grey100};
  font-size: ${({ theme }) => theme.font.size.paragraph};

  ${({ theme }) => theme.mq.tablet} {
    width: 300px;
    text-align: right;
  }
`;

const ImageWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
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
      <ImageWrapper>
        <Image fluid={fluid} style={StyledImg} />
      </ImageWrapper>
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
