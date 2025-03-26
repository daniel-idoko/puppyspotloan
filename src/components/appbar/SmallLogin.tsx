import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import useStyles from "../../styles/drawer";
import { HiLockOpen } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import * as ROUTES from '../../constants/routes'
import { useNavigate } from "react-router-dom";
import * as DASHBORDROUTES from '../../constants/dashboard_routes'
import { ThreeCircles } from "react-loader-spinner";
import axios from 'axios';


interface Props{
    
}

const SmallLogin: React.FC<Props> = ({  }) => {
    const classes = useStyles()
    const Section = styled('section')({ })


    const navigate = useNavigate()
    const [loginId, setLogin] = useState('')
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const [loginLoading, setLoginLoading] = useState(false)
    const [inputEmpty, setInputEmpty] = useState(false)
    const [wrongID, setWrongID] = useState(false)
    const LOGINID = '123456789'
    
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

                if(loginId === LOGINID){
                    setLoginSuccess(true)
                    navigate(DASHBORDROUTES.HOME)
                }else{
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
            <section className={classes.section2}>
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
    )
}

export default SmallLogin