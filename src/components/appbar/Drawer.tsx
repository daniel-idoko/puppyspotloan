import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import useStyles from "../../styles/drawer";
import * as ROUTES from '../../constants/routes'
import * as DASHBORDROUTES from '../../constants/dashboard_routes'
import Popup from "./Popup";
import { ThreeCircles } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import passwords from "../../data/password.json"


interface Props{
    name: string
    closeSearch:  () => void
    searchActive: boolean
}

const Drawer: React.FC<Props> = ({ name, closeSearch, searchActive }) => {
    const classes = useStyles()
   

    const [activeMenu, setActiveMenu] = useState<string | null>(localStorage.getItem('active-menu'))


    useEffect(()=> {
        if(localStorage.getItem('active-menu')){
            setActiveMenu(localStorage.getItem('active-menu'))
        }else{
            setActiveMenu('credit')
        }
    }, [searchActive])


    const handleActiveChange =(name:string)=>{
        setActiveMenu(name)
        localStorage.setItem('active-menu', name)
    }
    

    const [needed, setNeeded] = useState<boolean>(false)
    const [name2, setName] = useState<string>('')
    const handleeZCard = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        
        setName("credit_card")
        setNeeded(true)
    }

    const handlAllied = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        
        setName("colledral-protection")
        setNeeded(true)
    }

/*
=============================================================== 
//* Log in logic
===============================================================
*/


const navigate = useNavigate()
const [loginId, setLogin] = useState('')
const [loginSuccess, setLoginSuccess] = useState(false)
const [loginError, setLoginError] = useState(false)
const [loginLoading, setLoginLoading] = useState(false)
const [inputEmpty, setInputEmpty] = useState(false)
const [wrongID, setWrongID] = useState(false)

const handleLoginSubmit =()=>{
    
    if(loginId != ''){
        setInputEmpty(false)

        setLoginSuccess(false)
        setLoginError(false)
        setLoginLoading(true)
        setWrongID(false)
        const testURL = process.env.REACT_APP_PRODUCT_ENDPOINT || ''
        axios.get(testURL)
        .then(function (response) { 
            setLoginLoading(false)

            for (let i = 0; i < passwords.length; i++) {
                if (loginId === passwords[i]){
                    setLoginSuccess(true)
                    window.location.replace(DASHBORDROUTES.HOME)
                    return;
                }

                setWrongID(true)
              } 
        })
        .catch(function (error) {
            setLoginError(true)
            setLoginSuccess(false)
            setLoginLoading(false)
            setWrongID(false)
        })

    }else{
        setInputEmpty(true)
    }
}


    return(
        <>
            <section className={classes.section} onClick={closeSearch}>
                {
                    name === 'menu'
                    ?
                    <section>
                        <ul className={classes.ul}>
                            <button onClick={()=> handleActiveChange('credit')} className={activeMenu==='credit' ? classes.activeButton : classes.button}>My Credit Union</button>
                            <button onClick={()=> handleActiveChange('product')} className={activeMenu==='product' ? classes.activeButton : classes.button}>Products & Services</button>
                            <button onClick={()=> handleActiveChange('tool')} className={activeMenu==='tool' ? classes.activeButton : classes.button}>Tools & Resources</button>
                            {
                                activeMenu === 'credit'
                                ?
                                <section>
                                    <div>
                                        <a href={ROUTES.BECOME_A_MEMBER}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-users"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>Become A Member</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href={ROUTES.CONTACT_US}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-envelope"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>Contact Us</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href={ROUTES.HOLIDAY_SCHEDULE}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-calendar-times-o"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>Holiday Schedule</p>
                                                </div>
                                            </div>
                                        </a>


                                        <a href="files/privacy.pdf" target="_blank" style={{textDecoration: 'none'}}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                    <div id="linkCard" className={classes.linkIconHolder}>
                                                        <div className={classes.linkCardIcon}><i className="fa fa-file-text-o"></i></div>
                                                        <p style={{fontSize: '0.9rem'}}>Privacy Policy</p>
                                                    </div>
                                            </div>
                                        </a>
                                    </div>
                                </section>
                                :
                                activeMenu === 'product'
                                ?
                                <section>
                                    <div>
                                        <a href={ROUTES.LOAN_RATES}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-percent" aria-hidden="true"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>Loan Rates</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href={ROUTES.LOAN_APPLICATION}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>Loan Application</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href={ROUTES.DEPOSITE_RATES}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-percent" aria-hidden="true"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>Deposit Rates</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href={ROUTES.CHECKING_ACCOUNTS}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-usd" aria-hidden="true"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>Checking Accounts</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href={ROUTES.CREDIT_CARDS}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-credit-card-alt" aria-hidden="true"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>Credit Cards</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href={ROUTES.CU_SERVICE}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-shield" aria-hidden="true"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>CU Services</p>
                                                </div>
                                            </div>
                                        </a>

                                        {/* <a href=''>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}>
                                                        <img id="linkCard2" src="/imgs/student-loads.svg" alt="" />
                                                    </div>
                                                    <p style={{fontSize: '0.9rem'}}>Student Loans</p>
                                                </div>
                                            </div>
                                        </a> */}
                                    </div>
                                </section>
                                :
                                activeMenu === 'tool'
                                ?
                                <section>
                                    <div>
                                        <a href={ROUTES.LOAN_APPLICATION}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-file-text-o"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>Loan Application</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href={ROUTES.CALCULATOR}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-calculator" aria-hidden="true"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>Calculators</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href={ROUTES.ATM_LOCATOR}>
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-map-pin" aria-hidden="true"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>ATM Locators</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a onClick={handleeZCard} target="_blank" href="https://www.eZCardInfo.com">
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-credit-card-alt" aria-hidden="true"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>eZCardInfo</p>
                                                </div>
                                            </div>
                                        </a>

                                        <a onClick={handlAllied} target="_blank" href="https://eliteccu.iqq.alliedsolutions.net/iQQ/ConsumerWebsite/Home">
                                            <div id="linkIconHolder" className={classes.linkCard}>
                                                <div id="linkCard" className={classes.linkIconHolder}>
                                                    <div className={classes.linkCardIcon}><i className="fa fa-car" aria-hidden="true"></i></div>
                                                    <p style={{fontSize: '0.9rem'}}>Collateral Protection</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </section>
                                :
                                null
                            }
                        </ul>
                    </section>
                    :
                    name === 'online'
                    ?
                    <section>
                        <ul className={classes.ul} style={{borderBottom: 'none'}}>
                            <form onSubmit={handleLoginSubmit} className={classes.form}>
                                <div className={classes.box}>
                                    <div className={classes.firstPart}>
                                        <h2 className={classes.firstPartTitle}>Online Account Access</h2>
                                        <input type="password" placeholder="LOGIN ID" className={classes.input1} value={loginId} onChange={(e)=> setLogin(e.currentTarget.value)} autoComplete='new-password' required/>
                                        <button disabled={loginLoading} type="button" onClick={handleLoginSubmit} className={loginLoading ? classes.input2Loading : classes.input2} style={loginError ? {} : {marginBottom: '10px'}}>
                                            <span>LOGIN</span>
                                            {
                                                loginLoading
                                                ?                                           
                                                <div className={classes.input2preloader}>
                                                    <ThreeCircles
                                                        visible={true}
                                                        height="20"
                                                        width="20"
                                                        color="#4fa94d"
                                                        ariaLabel="three-circles-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass=""
                                                    />
                                                </div>
                                                :null
                                            }
                                        </button>
                                            {loginError ? <span className={classes.secondPartLinkSpan}>Somethin went wrong. Try again</span> : wrongID ? <span className={classes.secondPartLinkSpan}>The ID you provided could not be found</span> : null}
                                    </div>
                                    <div className={classes.secondPart}>
                                        <a href={ROUTES.BECOME_A_MEMBER_FORM} className={classes.secondPartLink}>Online Enrollment</a>
                                    </div>
                                </div>
                            </form>
                        </ul>
                    </section>
                    :
                    null
                }
            </section>

            <Popup needed={needed} setNeeded={setNeeded} name={name2} setName={setName}/>
        </>
    )
}

export default Drawer