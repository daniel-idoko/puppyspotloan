import { styled } from '@mui/system'
import React, { useEffect, useState } from "react";
import useStyles from "../../styles/footer";
import { Grid } from "@mui/material";
import Popup from '../appbar/Popup';
import { SITE_MAP } from '../../constants/routes';
import { LiaAngleUpSolid } from "react-icons/lia";


const Footer: React.FC =()=>{
    const classes = useStyles()

    const FirstSection = styled('section')(({ theme }) => ({
        background: '#422861',
        padding: '20px 0 !important',
        position: 'relative',
        textAlign: 'center',
    }));


    const SecondSection = styled('section')(({ theme }) => ({
        fontFamily: 'serif',
        position: 'relative',
        maxWidth: '1170px',
        width: '100%',
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',

        [theme.breakpoints.down('md')]: {
            maxWidth: '540px !important',
        },
    }));

    const LastSection = styled('section')(({ theme }) => ({
        position: 'relative',
        color: '#ccc',
        background: '#111111',
        textShadow: '1px 1px 1px rgba(0,0,0,.1)',
        padding: '40px 0',
        fontSize: '14px',
        lineHeight: 1.8,
        fontFamily: 'serif'
    }));

    const Footer = styled('footer')(({ theme }) => ({
        position: 'relative',
        backgroundColor: '#150723',
        color: '#CCC',
        borderTopColor: 'rgba(0, 0, 0, .2)',
    }));

    const [name, setName] = useState<string>('')
    const [needed, setNeeded] = useState<boolean>(false)
    const termsOfServicePopup = (event: React.MouseEvent<HTMLAnchorElement>) =>{
        event.preventDefault()
        
        setName("footer-terms-of-service")
        setNeeded(true)
    }



    useEffect(() => {
        const handleScroll = () => {
          if(window.scrollY > 250){
            document.getElementById('gotoTop')?.classList.add('show')
          }else{
            document.getElementById('gotoTop')?.classList.remove('show')
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [])
      const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
      };

    return (
        <>
            <Footer>
                <FirstSection>
                    <div className={classes.firstSectionInner}>
                        <h3 className={classes.tagLineh3} data-aos="flip-down" data-aos-delay="300" data-aos-duration="500">
                            <img src="/imgs/tagline.png" alt="" className={classes.tagLineImg} />
                        </h3>
                    </div>
                </FirstSection>

                <SecondSection>
                    <div className={classes.secondSectionInner}>
                        <Grid container>
                            <Grid item xs={12} md={4}>
                                <img src="/imgs/logo.png" alt="logo" className={classes.footerImg}/>

                                <div>
                                    <address className={classes.addHolder}>
                                        <strong className={classes.stongText}>Main Office:</strong><br />
                                        <span>515 S. Main Street</span><br />
                                        <span>Bourbonnais, IL 60914</span><br /><br />

                                        <strong className={classes.stongText}>Main Office Phone: </strong><span>(815) 933-7711</span> <br />
                                        <strong className={classes.stongText}>Fax: </strong> <span>(815) 933-5802</span><br />
                                        <strong className={classes.stongText}>Email: </strong>
                                        <a href="mailto:mycu@eliteccu.com" className={classes.stongText}>mycu@eliteccu.com</a><br />

                                        <br />
                                        <strong className={classes.stongText}>Lost/Stolen Debit Card: </strong>
                                        <span>1-800-523-4175</span><br />
                                        <strong className={classes.stongText}>Lost/Stolen Credit Card: </strong>
                                        <span>1-800-322-8472</span><br />
                                    </address>
                                    <p className={classes.routingText}>Routing Transit #: 271985556</p>
                                </div>

                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Grid container>
                                    <Grid item xs={12} md={4} style={{marginRight: '1rem', marginBottom: '1rem'}}>
                                        <img src="/imgs/ncua.png" alt="" style={{ maxWidth: '100%', verticalAlign: 'middle', }}/>
                                    </Grid>
                                    <Grid item xs={12} md={5} style={{marginRight: '1rem', marginBottom: '1rem'}}>
                                        <img src="/imgs/ehl.png" alt="" style={{ maxWidth: '100%', verticalAlign: 'middle', }}/>
                                        <p className={classes.routingText} style={{marginBottom: '0'}}>We do business in accordance with the Federal Fair Housing Law and Equal Opportunity Act.</p>
                                    </Grid>
                                    <Grid item xs={12} md={2} style={{marginRight: '1rem', marginBottom: '1rem'}}>
                                        <ul>
                                            <li className={classes.li} style={{cursor: 'pointer'}}>
                                                <a href="/files/privacy.pdf" className={classes.listLink} target="_blank">Privacy Policy</a>
                                            </li>
                                            <li className={classes.li} style={{cursor: 'pointer'}}>
                                                <a onClick={termsOfServicePopup} className={classes.listLink}>Terms of Use</a>
                                            </li>
                                            <li className={classes.li} style={{cursor: 'pointer'}}><a href={SITE_MAP} className={classes.listLink}>Site Map</a></li>
                                        </ul>
                                    </Grid>
                                </Grid>
                                <p className={classes.routingText}>Our Credit Union is committed to providing a website that is accessible to the widest possible audience in accordance with ADA guidelines. We are working to increase the accessibility and usability of our website for all people. If you are using a screen reader or other auxiliary aid and are having problems using this website, please contact us at 815.933.7711 for assistance. Products and services available on this website are available at our office located at 515 S. Main St., Bourbonnais, IL 60914.</p>
                            </Grid>
                        </Grid>
                    </div>
                </SecondSection>

                <LastSection>
                    <div className={classes.firstSectionInner}>
                        <Grid container>
                            <Grid item xs={12} md={8}>Copyright © <span id="w">2024</span> Elite Community Credit Union. All Rights Reserved. <a href="https://www.blossom.net/" target="_blank" style={{color: '#999999', textDecoration: 'none', marginLeft: '0.5rem', position: 'relative'}}>Powered by:<span style={{margin: '0 1rem'}} className={classes.blossom}> <img src="/imgs/blossom.png" alt="" style={{width: '100%'}}/> </span></a></Grid>
                            <Grid item xs={12} md={4}></Grid>
                        </Grid>
                    </div>
                </LastSection>

                <div onClick={handleBackToTop} id="gotoTop" className="icon-angle-up"> <LiaAngleUpSolid style={{fontWeight: '100'}}/> </div>
            </Footer>

            <Popup needed={needed} setNeeded={setNeeded} name={name} setName={setName}/>
        </>
    )
}

export default Footer