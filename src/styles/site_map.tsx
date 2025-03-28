import { makeStyles } from "@mui/styles";
import { display } from "@mui/system";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme)=>{
    return {
        heroInner: {
            position: 'relative',
            zIndex: 5,
            paddingTop: '100px',
            maxWidth: '1170px',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        heroInnerH1: {
            color: '#ffffffe6',
            fontSize: '2.4rem',
            fontWeight: 600,
            letterSpacing: '3px',
            padding: 0,
            margin: 0,
            lineHeight: 1,
            textTransform: 'uppercase',
            fontFamily: 'Raleway, sans-serif',

            [theme.breakpoints.down('md')]: {
                textAlign: 'center !important',
                fontSize: '2.2rem',
            },
        },
        mainContentInner: {
            position: 'relative',
            padding: '25px 0',
            margin: '0 auto',
        },
        mainContentInnerContainer: {
            position: 'relative',
            top: 0,
            padding: '50px 0',
            maxWidth: '1170px',
            width: '100%',
            margin: '0 auto',

            [theme.breakpoints.down('lg')]: {
                maxWidth: '860px',
            },
            [theme.breakpoints.down('md')]: {
                maxWidth: '600px',
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '440px',
                padding: '15px !important'
            },
        },

        sbox: {
            display: 'flex',
            width: '33.33%',
            justifyContent: 'center',
            flexFlow: 'column',

            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },

        title: {
            fontSize: '18px',
            background: '#422662',
            color: '#fff',
            textAlign: 'center',
            margin: '0 auto',
            padding: '10px',
            width: '90%',
            border: '2px solid transparent',
            borderRadius: '5px 5px 0 0',
        },
        sboxUl: {
            margin: '0 auto',
            width: '90%',
            listStyle: 'none',
            padding: '5px 10px',
            border: '2px solid #eee',
            borderRadius: '0 0 5px 5px',
            marginBottom: '40px',
            fontSize: '0.957rem',
            lineHeight: '1.4'
        }


    }
})

export default useStyles