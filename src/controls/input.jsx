import TextField from '@mui/material/TextField';


export function Input(props) {
    // Si existe una propiedad extra se guardará dentro del objeto ...other
    const {name, label, value, variant, onChange, error = null, ...other} = props;
    return (
        <TextField 
            variant= {variant || "outlined"}
            label= {label}
            name= {name}
            value= {value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error})}
        />
    )
}