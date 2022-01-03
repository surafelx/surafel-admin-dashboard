import { styled } from '@mui/material/styles';
import { Button} from '@mui/material'

export const PrimaryButton = styled((props) => (
    <Button {...props} />))`
    width: 143px;
    height: 40px;
    margin-top: 12px;
    background-color: #0085FF;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    :hover {
      background-color: #0085FF;
    }
    `;

const Buttons = {
  PrimaryButton
}

export default Buttons