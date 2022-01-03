import { styled } from '@mui/material/styles';

export const SecondaryLink = styled((props) => (
    <div {...props} />))`
    padding-top: 12px;
    font-size: 0.625rem;
    text-transform: uppercase;
    color: #969696;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
      `

const Links = {
  SecondaryLink
}

export default Links