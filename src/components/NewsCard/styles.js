import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  width: 1156px;
  height: 317.4px;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
`;

const NewsImage = styled.img`
  width: 424px;
  height: 317.01px;
  object-fit: cover;
  border-radius: 8px;
`;

const DataContainer = styled.div`
  width: Fill (720px)px;
  height: Hug (288px)px;
  gap: 24px;
  opacity: 0px;
  padding-left: 10px;
`;

const ChannelName = styled.p`
width: Hug (74px)px;
height: Hug (16px)px;
gap: var(--sizing1);
opacity: 0px;
font-family: Roboto Condensed;
font-size: var(--fontsizesm);
font-weight: 700;
line-height: var(--fontline-heightxs);
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #008B8B;
text-transform: uppercase;
`;

const NewsTitle = styled.h1`
  width: 720px;
  height: 96px;
  gap: 0px;
  opacity: 0px;
  font-family: Playfair Display;
  font-size: 36px;
  font-weight: 800;
  line-height: var(--fontline-height2xl);
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1E293B;
  max-height: fill (720px);
  margin-top: 5px;
`;

const Description = styled.p`
  width: 720px;
  height: 112px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto Condensed;
  font-size: 20px;
  font-weight: 400;
  line-height: 27.5px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #475569;
  margin-top: 30px;

`;

const AuthorContainer = styled.div`
  width: Hug (287px)px;
  height: Hug (40px)px;
  gap: var(--2);
  opacity: 0px;
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  gap: 0px;
  border-radius: 50%;
  opacity: 0px;
  margin-right: 8px;
`;

const AuthorName = styled.h1`
  width: 130px;
  height: 22px;
  gap: 0px;
  opacity: 0px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #475569;
  margin: 0;
`;

const PublishDate = styled.h2`
  width: 115px;
  height: 18px;
  gap: 0px;
  opacity: 0px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.5px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #475569;

`;

export { CardContainer, NewsImage, DataContainer, ChannelName, NewsTitle, Description, AuthorContainer, AuthorImage, AuthorName, PublishDate };