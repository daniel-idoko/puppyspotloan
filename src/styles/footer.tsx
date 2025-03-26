import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";


const useStyles = makeStyles((theme: Theme)=>{
    return {
        firstSectionInner: {
            maxWidth: '1170px',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
            marginRight: 'auto',
            marginLeft: 'auto',

            
        },
        tagLineh3: {
            color: '#fff',
            letterSpacing: '2px',
            fontSize: '22px',
            fontWeight: 700,
            marginBottom: 0,
            opacity: 1,
            animationDuration: '1s',
            animationFillMode: 'both',
            lineHeight: 1.5,
            margin: '0 0 30px',
            fontFamily: 'Raleway, sans-serif',
        },
        tagLineImg: {
            width: '350px',
            maxWidth: '100%',
            verticalAlign: 'middle',
            borderStyle: 'none',
        },
        blossom: {
            display: 'inline-block',
            width: '60px',
            verticalAlign: 'text-top',
        },

        secondSectionInner: {
            position: 'relative',
            padding: '80px 0',
        },

        footerImg: {
            display: 'block',
            marginBottom: '30px',
            maxWidth: '100%',
            verticalAlign: 'middle',
            borderStyle: 'none',
        },
        addHolder: {
            fontStyle: 'normal',
            marginBottom: '30px',
            fontSize: '0.873rem',
            color: '#ccc',
            lineHeight: '1.4'
        },
        stongText: {
            fontSize: '0.873rem',
            color: '#ccc',
        },
        routingText: {
            opacity: '.8',
            fontSize: '0.873rem',
            lineHeight: 1.7,
            marginBottom: '30px',
        },
        listLink: {
            textDecoration: 'none',
            color: '#CCC',
            fontSize: '0.873rem',

            "&:hover": {
                color: '#fff',
            }
        },
        li: {
            padding: '4px', 
            listStyle: 'square',

            [theme.breakpoints.down('md')]: {
                listStyle: 'none',
            },
        }
    
    }
})

export default useStyles