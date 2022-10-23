import { makeStyles } from 'tss-react/mui'; 

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            //spacing(1) = 8px
            margin: theme.spacing(3)
        }
    }
}));

export function Form (props) {
    const classes = useStyles();
    const { children, ...other} = props;

    return (
        <form className={classes.root} noValidate autoComplete="off" {...other}>
            {children}
        </form>
    )
}