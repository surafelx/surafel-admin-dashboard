import { styled } from '@mui/material/styles';
import { TextField, Icon, InputAdornment} from '@mui/material'


export const TextFieldWithIcon = styled((props: {children: any, placeholder: string}) => (
  <TextField
  placeholder={props.placeholder || ''} 
  InputProps={{
    startAdornment: (
        <Icon>
         {props.children}
        </Icon>
    )
  }}
/>
))`
outline: none;
font-size: 12px;
height: 50px;
border-radius: 8px;
width: 390px;
padding: 8px;
padding-top: 12px;
`;


export const Input = styled((props) => (
  <TextField {...props} fullWidth InputLabelProps={{
    shrink: false,
    style: {
      textTransform: 'uppercase',
      fontSize: '0.625rem',
      paddingBottom: '100px',
      textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    } }} />
))`
outline: none;
font-size: 12px;
height: 50px;
border-radius: 8px;
width: 390px;
padding: 8px;
padding-top: 12px;
`;

  
const Inputs = {
  Input, 
  TextFieldWithIcon
}

export default Inputs