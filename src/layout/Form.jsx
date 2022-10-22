import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            //spacing(1) = 8px
            margin: theme.spacing(1)
        }
    }
}));

export function Form(props) {
    const classes = useStyles();
    const { children, ...other} = props;

    return (
        <form className={classes.root} noValidate autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}