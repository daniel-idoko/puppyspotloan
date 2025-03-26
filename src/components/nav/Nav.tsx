import React, { useEffect, useState } from 'react'
import {styled} from '@mui/system'
import { makeStyles } from '@mui/styles'
import { MdOutlineMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { HiLockOpen } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import Drawer from '../appbar/Drawer';
import SmallDrawer from '../appbar/SmallDrawer';
import { Theme } from '@mui/material';
import SmallLogin from '../appbar/SmallLogin';
import { useNavigate } from 'react-router';

const useStyles = makeStyles((theme: Theme)=>{
    return {
        section: {
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            zIndex: '205 !important',
            borderBottomColor: 'rgb(238, 238, 238)',
            transition: 'all 0.15s linear',
            
          
            // Media query for smaller screens
            [theme.breakpoints.down('lg')]: {
                backgroundColor: '#150723 !important',
                height: 'auto !important'
            },
        },
        imgSection: {
            width: 'fit-content',

            [theme.breakpoints.down('md')]: {
                marginLeft: '-10px',
            },
        },
        logo: {
            display: 'block',
            transition: 'all 0.15s linear',
            height: '100px',

            [theme.breakpoints.down('lg')]: {
                height: '100px !important',
            },
        },

        navigationSection: {
            // float: 'right',
        },
        ul: {
            borderWidth: '0px !important',
            borderStyle: 'initial !important',
            borderColor: 'initial !important',
            borderImage: 'initial !important',
            listStyle: 'none',
        },
        li: {
            marginLeft: '0px',
            position: 'inherit',
            marginRight: '5px',
            float: 'left',
            cursor: 'pointer'
        },
        li2: {
            marginLeft: '0px',
            position: 'inherit',
            marginRight: '5px',
            float: 'left',
            cursor: 'pointer'
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            padding: '0px 30px',
            height: '104px',
            
        
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        navLink: {
            height: '35px',
            marginTop: '30px',
            display: 'flex',
            alignItems: 'center',
            color: 'rgb(66, 40, 97) !important',
            background: 'white',
            borderRadius: '105px',
            padding: '0px 10px',

            lineHeight: '22px',
            fontWeight: 'bold',
            fontSize: '13px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'all 0.15s linear',

            textDecoration: 'none',
            border: '2px solid #ffffff',

            [theme.breakpoints.down('lg')]: {
                marginTop: '30px !important',
            },
        },
        navLinkActive: {
            height: '35px',
            marginTop: '30px',
            display: 'flex',
            alignItems: 'center',
            color: '#ffffff !important',
            backgroundColor: '#422861 !important',
            borderRadius: '105px',
            padding: '0px 10px',

            lineHeight: '22px',
            fontWeight: 'bold',
            fontSize: '13px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'all 0.15s linear',

            textDecoration: 'none',
            border: '2px solid #ffffff',

            [theme.breakpoints.down('lg')]: {
                marginTop: '30px !important',
            },
        },

        navLinkActiveSmall: {
            height: '35px',
            marginTop: '30px',
            display: 'flex',
            alignItems: 'center',
            color: '#422861 !important',
            backgroundColor: '#fff',
            borderRadius: '105px',
            padding: '0px 10px',

            lineHeight: '22px',
            fontWeight: 'bold',
            fontSize: '13px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            transition: 'margin 0.4s ease 0s, padding 0.4s ease 0s',

            textDecoration: 'none',
            border: '2px solid #ffffff',

            "&:hover": {
                backgroundColor: '#422861 !important',
                color: '#fff !important'
            }
        },
        icon: {
            textAlign: 'center',
            verticalAlign: 'top',
            paddingRight: '2px',
            fontSize: '1.1rem !important',
            margin: '0px 2px',
        },
        searchForm: {
            opacity: '1',
            zIndex: '10',
            position: 'absolute',
            width: '100% !important',
            height: '100% !important',
            padding: '0 15px',
            margin: '0',
            top: '0',
            left: '0',
            transition: 'opacity .3s ease-in-out',

            [theme.breakpoints.down('md')]: {
                display: 'none'
            },
        }, 
        searchInput: {
            width: '70% !important',
            paddingLeft: '40px',
            pointerEvents: 'auto',
            borderBottomColor: 'rgba(255, 255, 255, 0.15) !important',
            textShadow: '1px 1px 1px rgba(0,0,0,.1)',
            borderRadius: '0',
            border: '0',
            outline: '0 !important',
            fontSize: '32px',
            padding: '0px 80px 10px 0',
            height: '100%',
            backgroundColor: 'transparent',
            fontWeight: '700',
            marginTop: '0 !important',
            fontFamily: 'Raleway, sans-serif',
            color: '#fff',
            letterSpacing: '2px',
        },

        overlay: {
            background: 'rgba(0, 0, 0, .75)',
            zIndex: '201 !important',
            position: 'fixed',
            top: '0',
            left: '0',
            height: '100% !important',
            width: '100% !important',
            cursor: 'url(./imgs/close.png), auto',
        }
    }
})

interface Props {}

const Nav: React.FC<Props> = () =>{
    const classes = useStyles()

    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollThreshold = 100;
            const navLinkEl =  document.getElementById('nav-link')
            const navLinkEl2 =  document.getElementById('nav-link2')
            const navLinkEl3 =  document.getElementById('nav-link3')
            const navSecEl =  document.getElementById('nav-section')
            const logoHolderEl =  document.getElementById('logo-holder')
            
            
            if(scrollTop > scrollThreshold){
                if(navLinkEl && navLinkEl2 && navLinkEl3 && navSecEl && logoHolderEl){

                    navLinkEl.style.marginTop = '10px'
                    navLinkEl2.style.marginTop = '10px'
                    navLinkEl3.style.marginTop = '10px'

                    logoHolderEl.style.height = '60px'

                    navSecEl.style.background = '#150723'
                    navSecEl.style.height = '60px'
                }
                
            }else{
                if(navLinkEl && navLinkEl2 && navLinkEl3 && navSecEl && logoHolderEl){

                    navLinkEl.style.marginTop = '30px'
                    navLinkEl2.style.marginTop = '30px'
                    navLinkEl3.style.marginTop = '30px'

                    logoHolderEl.style.height = '100px'

                    navSecEl.style.background = 'none'
                    navSecEl.style.height = 'auto'
                }

            }
        };

        window.addEventListener('scroll', handleScroll)
    }, []);
    
    



    const NavSmall = styled('nav')(({ theme }) => ({
        justifyContent: 'space-between',
        alignItems: 'start',
        padding: '0px 30px',
        display: 'none',
        height: '104px',
        
      
        [theme.breakpoints.down('md')]: {
            display: 'flex',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0px 20px',
        },
    }));
    const Height = styled('section')(({ theme }) => ({
        height: '104px',
        display: 'none',

        // Media query for smaller screens
        [theme.breakpoints.down('lg')]: {
            display: 'block'
        },
    }));

    const [firstButton, setFirstButton] = useState<boolean>(false)
    const [secondButton, setSecondButton] = useState<boolean>(false)
    const [searchActive, setSearchActive] = useState<boolean>(false)

    const [navDisplay, setNavDisplay] = useState<string>('') 
    const [navActive, setNavActive] = useState<boolean>(false)
    const [smallLoginActive, setSmallLoginActive] = useState<boolean>(false)

    const closeSearch =()=> {
        setSearchActive(false)
    }

    const closeNav =()=> {
        setSmallLoginActive(false)
        setNavActive(false)
        setSearchActive(false)
    }
    const openNav =()=> {
        setNavActive(true)
    }

    const handleNavClick =(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, button:string)=>{
        e.preventDefault()

        switch (button) {
            case '1':
                if(firstButton === true){
                    closeNav()
                    setFirstButton(false)
                    setSecondButton(false)
                }else{
                    setSecondButton(false)
                    setFirstButton(true)
                    setNavDisplay('menu')
                    openNav()
                }
                break;
                
            case '2':
                if(secondButton === true){
                    closeNav()
                    setSecondButton(false)
                    setFirstButton(false)
                }else{
                    setFirstButton(false)
                    setSecondButton(true)
                    setNavDisplay('online')
                    openNav()
                }
                break;
            case '3': 
                setSecondButton(false)
                setFirstButton(false)
                setSearchActive(!searchActive)
                break;
        
            default:
                break;
        }
        
    }

    const closeEverything =()=>{
        closeSearch()
        closeNav()
        setFirstButton(false)
        setSecondButton(false)
        setSmallLoginActive(false)
    }
    
    const [searchTerm, setSearchTerm] = useState<string>('')
    const navigate = useNavigate()
    const handleSearchFormSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        navigate(`/mcu-search-results/${searchTerm}`)
    }

    return (
        <>
        <Height></Height>
        <section className={classes.section} id='nav-section'>
            <nav className={classes.nav}>
                <div className={classes.imgSection}>
                    {
                        searchActive
                        ?
                        <form className={classes.searchForm} onSubmit={handleSearchFormSubmit}>
                            <input 
                                id='search-here' 
                                placeholder='SEARCH HERE' 
                                type="text" 
                                name='search-here'
                                autoComplete="off"
                                className={classes.searchInput} 
                                value={searchTerm} 
                                onChange={(event)=> setSearchTerm(event.currentTarget.value)}
                            />
                        </form>
                        :
                        <a id='logo-holder' href="/" className={classes.logo}>
                            <img src="/imgs/logo.png" alt="Elit Credit Union Logo" style={{height: '100%'}}/>
                        </a>

                    }
                </div>


                <div className={classes.navigationSection}>
                    <ul className={classes.ul}>
                        <li className={classes.li}>

                            {
                                navActive
                                ?
                                <Drawer name={navDisplay} closeSearch={closeSearch} searchActive={searchActive}/>
                                :
                                null
                            }

                            <a id='nav-link' className={firstButton ? classes.navLinkActive : classes.navLink} onClick={(e)=> handleNavClick(e, '1')}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <MdOutlineMenu className={classes.icon}/>
                                    <span className="dt-only">Menu</span>
                                </div>
                            </a>
                        </li>
                        <li className={classes.li2} id='icon-container'>
                            <a id='nav-link2' className={secondButton ? classes.navLinkActive : classes.navLink} onClick={(e)=> handleNavClick(e, '2')}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <HiLockOpen id="normal-icon" className={classes.icon} />
                                    <HiLockClosed id="hover-icon" className={classes.icon}/>
                                    
                                    <span className="dt-only">Online Access</span>
                                </div>
                            </a>
                        </li>

                        <li className={classes.li2} style={{position: 'relative', zIndex: '100'}}>
                            <a id='nav-link3' className={searchActive ? classes.navLinkActive : classes.navLink} onClick={(e)=> handleNavClick(e, '3')}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    { searchActive ? <IoCloseSharp className={classes.icon}/> : <IoSearch className={classes.icon}/>}
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <NavSmall>
                <div className={classes.imgSection}>
                    {
                        
                        <a href="/">
                            <img src="/imgs/logo.png" alt="Elit Credit Union Logo" className={classes.logo}/>
                        </a>

                    }
                </div>


                <div className={classes.navigationSection}>
                    <ul className={classes.ul}>

                    {
                        navActive
                        ?
                        <SmallDrawer searchActive={searchActive} setSearchActive={setSearchActive} setSmallLoginActive={setSmallLoginActive} setNavActive={setNavActive}/>
                        :
                        smallLoginActive
                        ?
                        <SmallLogin  />
                        :
                        null
                    }

                        
                        <li onClick={navActive ? ()=>closeNav() : ()=> openNav()} className={classes.li2} style={{position: 'relative', zIndex: '100'}}>
                            <a  className={classes.navLinkActiveSmall}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    { navActive ? <IoCloseSharp className={classes.icon}/> :  <MdOutlineMenu className={classes.icon}/>}
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </NavSmall>
        </section>
        {
            navActive || searchActive || smallLoginActive
            ?
            <div onClick={closeEverything} className={classes.overlay}></div>
            :
            null

        }
        </>
    )
}

export default Nav