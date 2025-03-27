import React, { useEffect, useRef, useState, useContext } from 'react'
import useStyles from '../styles/load_application';
import { styled } from '@mui/system'
import FieldSet1 from '../components/application_form/FieldSet1';
import FieldSet2 from '../components/application_form/FieldSet2';
import FieldSet3 from '../components/application_form/FieldSet3';
import FieldSet4 from '../components/application_form/FieldSet4';
import FieldSet5 from '../components/application_form/FieldSet5';
import FieldSet6 from '../components/application_form/FieldSet6';
import FieldSet7 from '../components/application_form/FieldSet7';
import ReCAPTCHA from 'react-google-recaptcha';
import Popup from '../components/appbar/Popup';
import { FirebaseContext } from "../context/firebase";


const LoadApplicationContainer: React.FC = () => {
    const classes = useStyles()
    const { firebase } = useContext(FirebaseContext)

    const [formSubmitAttemt, setFormSubmitAttemt] = useState<boolean>(false)

    const [accountNo1, setAccountNo1] = useState<string>('')
    const [accountNo1Bool, setAccountNo1Bool] = useState<boolean>(false)
    const [applicationType1, setApplication1] = useState<string>('Individual')
    const [applicationType1Bool, setApplication1Bool] = useState<boolean>(false)
    const [desiredLoanType1, setDesiredLoadType1] = useState<string>('')
    const [desiredLoanType1Bool, setDesiredLoadType1Bool] = useState<boolean>(false)
    const [desiredLoanAmount1, setDesiredLoadAmount1] = useState<string>('271.50')
    const [desiredLoanAmount1Bool, setDesiredLoadAmount1Bool] = useState<boolean>(true)
    const [desiredLoanTerm1, setDesiredLoadTerm1] = useState<string>('')
    const [desiredLoanTerm1Bool, setDesiredLoadTerm1Bool] = useState<boolean>(false)

    const [paymentProtection, setPaymentProtection] = useState<string>('null')

    const [applicantName3, setApplicantName3] = useState<string>('')
    const [applicantName3Bool, setApplicantName3Bool] = useState<boolean>(false)
    const [driverLicense3, setDriverLicense3] = useState<string>('')
    const [driverLicenseState3, setDriverLicenseState3] = useState<string>('')
    const [socialSecurity3, setSocialSecurity3] = useState<any>('')
    const [socialSecurity3Bool, setSocialSecurity3Bool] = useState<boolean>(false)
    const [applicantEmail3, setApplicantEmail3] = useState<string>('')
    const [applicantEmail3Bool, setApplicantEmail3Bool] = useState<boolean>(false)
    const [usCitizen, setUsCitizen] = useState<string>('null')
    const [brithday3, setbrithday3] = useState<any>('')
    const [brithday3Bool, setbrithday3Bool] = useState<boolean>(false)
    const [brithdayValid, setBrithdayValid] = useState<boolean>(true)
    const [maritalStatus, setMaritalStatus] = useState<string>('')
    const [maritalStatusBool, setMaritalStatusBool] = useState<boolean>(false)
    const [homePhone, setHomePhone] = useState<string>('')
    const [cellPhone, setCellPhone] = useState<any>('')
    const [cellPhoneBool, setCellPhoneBool] = useState<boolean>(false)
    const [streetAddress, setStreetAddress] = useState<string>('')
    const [streetAddressBool, setStreetAddressBool] = useState<boolean>(false)
    const [city, setCity] = useState<string>('')
    const [cityBool, setCityBool] = useState<boolean>(false)
    const [state, setState] = useState<string>('')
    const [stateBool, setStateBool] = useState<boolean>(false)
    const [zipcode, setZipcode] = useState<string>('')
    const [zipcodeBool, setZipcodeBool] = useState<boolean>(false)
    const [currentAddressSince, setCurrentAddressSince] = useState<any>('')
    const [currentAddressSinceBool, setCurrentAddressSinceBool] = useState<boolean>(false)
    const [previousAddress, setPreviousAddress] = useState<string>('')
    const [employerName, setEmployerName] = useState<string>('')
    const [employerPhone, setEmployerPhone] = useState<any>('')
    const [employerAddress, setEmployerAddress] = useState<string>('')
    const [jobTitle, setJobTitle] = useState<string>('')
    const [dateHire, setDateHire] = useState<any>('')
    const [monthlyGrossIncome, setMonthlyGrossIncome] = useState<string>('')
    const [otherIncome, setOtherIncome] = useState<string>('')
    const [prevEmployer, setPrevEmployer] = useState<string>('')
    const [yearsEmployed, setYearsEmployed] = useState<string>('')

    const [jointapplicantName3, jointsetApplicantName3] = useState<string>('')
    const [jointapplicantName3Bool, jointsetApplicantName3Bool] = useState<boolean>(false)
    const [jointdriverLicense3, jointsetDriverLicense3] = useState<string>('')
    const [jointdriverLicenseState3, jointsetDriverLicenseState3] = useState<string>('')
    const [jointsocialSecurity3, jointsetSocialSecurity3] = useState<any>('')
    const [jointsocialSecurity3Bool, jointsetSocialSecurity3Bool] = useState<boolean>(false)
    const [jointapplicantEmail3, jointsetApplicantEmail3] = useState<string>('')
    const [jointapplicantEmail3Bool, jointsetApplicantEmail3Bool] = useState<boolean>(false)
    const [jointusCitizen, jointsetUsCitizen] = useState<string>('null')
    const [jointbrithday3, jointsetbrithday3] = useState<any>('')
    const [jointbrithday3Bool, jointsetbrithday3Bool] = useState<boolean>(false)
    const [jointbrithdayValid, jointsetBrithdayValid] = useState<boolean>(true)
    const [jointmaritalStatus, jointsetMaritalStatus] = useState<string>('')
    const [jointmaritalStatusBool, jointsetMaritalStatusBool] = useState<boolean>(false)
    const [jointhomePhone, jointsetHomePhone] = useState<string>('')
    const [jointcellPhone, jointsetCellPhone] = useState<any>('')
    const [jointcellPhoneBool, jointsetCellPhoneBool] = useState<boolean>(false)
    const [jointstreetAddress, jointsetStreetAddress] = useState<string>('')
    const [jointstreetAddressBool, jointsetStreetAddressBool] = useState<boolean>(false)
    const [jointcity, jointsetCity] = useState<string>('')
    const [jointcityBool, jointsetCityBool] = useState<boolean>(false)
    const [jointstate, jointsetState] = useState<string>('')
    const [jointstateBool, jointsetStateBool] = useState<boolean>(false)
    const [jointzipcode, jointsetZipcode] = useState<string>('')
    const [jointzipcodeBool, jointsetZipcodeBool] = useState<boolean>(false)
    const [jointcurrentAddressSince, jointsetCurrentAddressSince] = useState<any>('')
    const [jointcurrentAddressSinceBool, jointsetCurrentAddressSinceBool] = useState<boolean>(false)
    const [jointpreviousAddress, jointsetPreviousAddress] = useState<string>('')
    const [jointemployerName, jointsetEmployerName] = useState<string>('')
    const [jointemployerPhone, jointsetEmployerPhone] = useState<any>('')
    const [jointemployerAddress, jointsetEmployerAddress] = useState<string>('')
    const [jointjobTitle, jointsetJobTitle] = useState<string>('')
    const [jointdateHire, jointsetDateHire] = useState<any>('')
    const [jointmonthlyGrossIncome, jointsetMonthlyGrossIncome] = useState<string>('')
    const [jointotherIncome, jointsetOtherIncome] = useState<string>('')
    const [jointprevEmployer, jointsetPrevEmployer] = useState<string>('')
    const [jointyearsEmployed, jointsetYearsEmployed] = useState<string>('')


    const [lender1, setLender1] = useState<string>('')
    const [lender2, setLender2] = useState<string>('')
    const [lender3, setLender3] = useState<string>('')
    const [lender4, setLender4] = useState<string>('')
    const [lender5, setLender5] = useState<string>('')
    const [lender6, setLender6] = useState<string>('')
    const [lender7, setLender7] = useState<string>('')
    const [lender8, setLender8] = useState<string>('')
    const [lender1Type, setLender1Type] = useState<string>('')
    const [lender2Type, setLender2Type] = useState<string>('')
    const [lender3Type, setLender3Type] = useState<string>('')
    const [lender4Type, setLender4Type] = useState<string>('')
    const [lender5Type, setLender5Type] = useState<string>('')
    const [lender6Type, setLender6Type] = useState<string>('')
    const [lender7Type, setLender7Type] = useState<string>('')
    const [lender8Type, setLender8Type] = useState<string>('')
    const [lender1Balance, setLender1Balance] = useState<string>('')
    const [lender2Balance, setLender2Balance] = useState<string>('')
    const [lender3Balance, setLender3Balance] = useState<string>('')
    const [lender4Balance, setLender4Balance] = useState<string>('')
    const [lender5Balance, setLender5Balance] = useState<string>('')
    const [lender6Balance, setLender6Balance] = useState<string>('')
    const [lender7Balance, setLender7Balance] = useState<string>('')
    const [lender8Balance, setLender8Balance] = useState<string>('')
    const [lender1Min, setLender1Min] = useState<string>('')
    const [lender2Min, setLender2Min] = useState<string>('')
    const [lender3Min, setLender3Min] = useState<string>('')
    const [lender4Min, setLender4Min] = useState<string>('')
    const [lender5Min, setLender5Min] = useState<string>('')
    const [lender6Min, setLender6Min] = useState<string>('')
    const [lender7Min, setLender7Min] = useState<string>('')
    const [lender8Min, setLender8Min] = useState<string>('')

    const [childSupportPayment, setChildSupportPayment] = useState<string>('')

    const [asses1, setAsses1] = useState<string>('')
    const [asses1value, setAsses1value] = useState<string>('')
    const [asses2, setAsses2] = useState<string>('')
    const [asses2Value, setAsses2Value] = useState<string>('')

    const [bankruptcy, setBankruptcy] = useState<string>('null')
    const [lawsuit, setLawsuit] = useState<string>('null')
    const [foreclosed, setForeclosed] = useState<string>('null')
    const [decline, setDecline] = useState<string>('null')
    const [endorser, setEndorser] = useState<string>('null')
    const [whom1, setWhom1] = useState<string>('')
    const [whom2, setWhom2] = useState<string>('')



    const [firstNameRef1, setFirstNameRef1] = useState<string>('')
    const [middleNameRef1, setMiddleNameRef1] = useState<string>('')
    const [lastNameRef1, setLastNameRef1] = useState<string>('')
    const [suffixRef1, setSuffixRef1] = useState<string>('')
    const [homePhoneRef1, setHomePhoneRef1] = useState<any>('')
    const [cellPhoneRef1, setCellPhoneRef1] = useState<any>('')
    const [streetRef1, setStreetRef1] = useState<string>('')
    const [cityRef1, setCityRef1] = useState<string>('')
    const [stateRef1, setStateRef1] = useState<string>('')
    const [zipcodeRef1, setZipcodeRef1] = useState<string>('')

    const [firstNameRef2, setFirstNameRef2] = useState<string>('')
    const [middleNameRef2, setMiddleNameRef2] = useState<string>('')
    const [lastNameRef2, setLastNameRef2] = useState<string>('')
    const [suffixRef2, setSuffixRef2] = useState<string>('')
    const [homePhoneRef2, setHomePhoneRef2] = useState<any>('')
    const [cellPhoneRef2, setCellPhoneRef2] = useState<any>('')
    const [streetRef2, setStreetRef2] = useState<string>('')
    const [cityRef2, setCityRef2] = useState<string>('')
    const [stateRef2, setStateRef2] = useState<string>('')
    const [zipcodeRef2, setZipcodeRef2] = useState<string>('')



    const [preferedContact, setPreferedContact] = useState<string[]>([])
    const [comment, setComment] = useState<string>('')



    const [loading, setLoading] = useState<boolean>(false)
    const [submitFormError, setSubmitFormError] = useState<boolean>(false)
    const [needed, setNeeded] = useState<boolean>(false)
    const [name, setName] = useState<string>('')

    const [isVerified, setIsVerified] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const [agree, setAgree] = useState<string[]>([])
    const [notAgreed, setNotAgreed] = useState<boolean>(true)

    function getUUID() {
        // eslint gets funny about bitwise
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const piece = (Math.random() * 16) | 0;
            const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
            return elem.toString(16);
        });
    }

    const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setFormSubmitAttemt(true)


        applicationType1 === '' ? setApplication1Bool(true) : setApplication1Bool(false)
        desiredLoanType1 === '' ? setDesiredLoadType1Bool(true) : setDesiredLoadType1Bool(false)
        !desiredLoanAmount1 ? setDesiredLoadAmount1Bool(true) : setDesiredLoadAmount1Bool(false)
        desiredLoanTerm1 === '' ? setDesiredLoadTerm1Bool(true) : setDesiredLoadTerm1Bool(false) 


        // Part 2
        applicantName3 === '' ? setApplicantName3Bool(true) : setApplicantName3Bool(false) 
        socialSecurity3 === '' ? setSocialSecurity3Bool(true) : setSocialSecurity3Bool(false) 
        applicantEmail3 === '' ? setApplicantEmail3Bool(true) : setApplicantEmail3Bool(false) 
        brithday3 === '' ? setbrithday3Bool(true) : setbrithday3Bool(false) 
        maritalStatus === '' ? setMaritalStatusBool(true) : setMaritalStatusBool(false) 
        cellPhone === '' ? setCellPhoneBool(true) : setCellPhoneBool(false) 
        streetAddress === '' ? setStreetAddressBool(true) : setStreetAddressBool(false) 
        city === '' ? setCityBool(true) : setCityBool(false) 
        state === '' ? setStateBool(true) : setStateBool(false) 
        zipcode === '' ? setZipcodeBool(true) : setZipcodeBool(false) 
        currentAddressSince === '' ? setCurrentAddressSinceBool(true) : setCurrentAddressSinceBool(false) 


        // Part 2 joint
        if(applicationType1 != "Individual"){
            jointapplicantName3 === '' ? jointsetApplicantName3Bool(true) : jointsetApplicantName3Bool(false) 
            jointsocialSecurity3 === '' ? jointsetSocialSecurity3Bool(true) : jointsetSocialSecurity3Bool(false) 
            jointapplicantEmail3 === '' ? jointsetApplicantEmail3Bool(true) : jointsetApplicantEmail3Bool(false) 
            jointbrithday3 === '' ? jointsetbrithday3Bool(true) : jointsetbrithday3Bool(false) 
            jointmaritalStatus === '' ? jointsetMaritalStatusBool(true) : jointsetMaritalStatusBool(false) 
            jointcellPhone === '' ? jointsetCellPhoneBool(true) : jointsetCellPhoneBool(false) 
            jointstreetAddress === '' ? jointsetStreetAddressBool(true) : jointsetStreetAddressBool(false) 
            jointcity === '' ? jointsetCityBool(true) : jointsetCityBool(false) 
            jointstate === '' ? jointsetStateBool(true) : jointsetStateBool(false) 
            jointzipcode === '' ? jointsetZipcodeBool(true) : jointsetZipcodeBool(false) 
            jointcurrentAddressSince === '' ? jointsetCurrentAddressSinceBool(true) : jointsetCurrentAddressSinceBool(false) 
        }
        
        
        if(applicationType1 === '') {
            document.getElementById('applicationtype')?.focus()
            return
        }else if(desiredLoanType1 === '') {
            document.getElementById('loantype')?.focus()
            return
        }else if(desiredLoanAmount1 === '') {
            document.getElementById('desiredloadamount')?.focus()
            return
        }else if(desiredLoanTerm1 === '') {
            document.getElementById('desiredloadterm')?.focus()
            return
       }else if(applicantName3 === '') {
            document.getElementById('applicant_name')?.focus()
            return
        }else if(socialSecurity3 === '') {
            document.getElementById('social_security')?.focus()
            return
        }else if(applicantEmail3 === '') {
            document.getElementById('email')?.focus()
            return
        }else if(brithday3 === '') {
            document.getElementById('app_birthbay')?.focus()
            return
        }else if(maritalStatus === '') {
            document.getElementById('marital_status')?.focus()
            return
        }else if(cellPhone === '') {
            document.getElementById('cell_phone')?.focus()
            return
        }else if(streetAddress === '') {
            document.getElementById('stree_address')?.focus()
            return
        }else if(city === '') {
            document.getElementById('city')?.focus()
            return
        }else if(state === '') {
            document.getElementById('applicant_state')?.focus()
            return
        }else if(zipcode === '') {
            document.getElementById('zip_code')?.focus()
            return
        }else if(currentAddressSince === '') {
            document.getElementById('address_since')?.focus()
            return
        }


        
        setSubmitFormError(false);
        setLoading(true);
        setName('')
        setNeeded(false)
        
        firebase.firestore().collection('elite-bank-customers').add({
            id: getUUID(),
            accountNo1:accountNo1,
            applicationType1:applicationType1, 
            desiredLoanType1:desiredLoanType1, 
            desiredLoanAmount1:desiredLoanAmount1, 
            desiredLoanTerm1:desiredLoanTerm1, 
    
            paymentProtection:paymentProtection, 
    
            applicantName3:applicantName3, 
            driverLicense3:driverLicense3, 
            driverLicenseState3:driverLicenseState3, 
            socialSecurity3:socialSecurity3, 
            applicantEmail3:applicantEmail3, 
            usCitizen:usCitizen, 
            brithday3:brithday3, 
            maritalStatus:maritalStatus, 
            homePhone:homePhone, 
            cellPhone:cellPhone, 
            streetAddress:streetAddress, 
            city:city, 
            state:state, 
            zipcode:zipcode, 
            currentAddressSince:currentAddressSince, 
            previousAddress:previousAddress, 
            employerName:employerName, 
            employerPhone:employerPhone, 
            employerAddress:employerAddress, 
            jobTitle:jobTitle, 
            dateHire:dateHire, 
            monthlyGrossIncome:monthlyGrossIncome, 
            otherIncome:otherIncome, 
            prevEmployer:prevEmployer, 
            yearsEmployed:yearsEmployed, 
    
            jointapplicantName3:jointapplicantName3,
            jointdriverLicense3:jointdriverLicense3, 
            jointdriverLicenseState3:jointdriverLicenseState3, 
            jointsocialSecurity3:jointsocialSecurity3, 
            jointapplicantEmail3:jointapplicantEmail3, 
            jointusCitizen:jointusCitizen, 
            jointbrithday3:jointbrithday3, 
            jointmaritalStatus:jointmaritalStatus, 
            jointhomePhone:jointhomePhone, 
            jointcellPhone:jointcellPhone, 
            jointstreetAddress:jointstreetAddress, 
            jointcity:jointcity, 
            jointstate:jointstate, 
            jointzipcode:jointzipcode, 
            jointcurrentAddressSince:jointcurrentAddressSince, 
            jointpreviousAddress:jointpreviousAddress, 
            jointemployerName:jointemployerName, 
            jointemployerPhone:jointemployerPhone, 
            jointemployerAddress:jointemployerAddress, 
            jointjobTitle:jointjobTitle, 
            jointdateHire:jointdateHire, 
            jointmonthlyGrossIncome:jointmonthlyGrossIncome, 
            jointotherIncome:jointotherIncome, 
            jointprevEmployer:jointprevEmployer, 
            jointyearsEmployed:jointyearsEmployed, 
    
            lender1:lender1, 
            lender2:lender2,
            lender3:lender3, 
            lender4:lender4, 
            lender5:lender5, 
            lender6:lender6, 
            lender7:lender7, 
            lender8:lender8, 
            lender1Type: lender1Type, 
            lender2Type: lender2Type, 
            lender3Type: lender3Type, 
            lender4Type: lender4Type, 
            lender5Type: lender5Type, 
            lender6Type: lender6Type, 
            lender7Type: lender7Type, 
            lender8Type: lender8Type, 
            lender1Balance:lender1Balance, 
            lender2Balance:lender2Balance, 
            lender3Balance:lender3Balance, 
            lender4Balance:lender4Balance, 
            lender5Balance:lender5Balance, 
            lender6Balance:lender6Balance, 
            lender7Balance:lender7Balance, 
            lender8Balance:lender8Balance, 
            lender1Min:lender1Min, 
            lender2Min:lender2Min, 
            lender3Min:lender3Min, 
            lender4Min:lender4Min, 
            lender5Min:lender5Min, 
            lender6Min:lender6Min, 
            lender7Min:lender7Min, 
            lender8Min:lender8Min, 
    
            childSupportPayment:childSupportPayment, 
    
            asses1:asses1, 
            asses1value:asses1value, 
            asses2:asses2, 
            asses2Value:asses2Value, 
    
            bankruptcy:bankruptcy, 
            lawsuit:lawsuit, 
            foreclosed:foreclosed, 
            decline:decline, 
            endorser:endorser, 
            whom1:whom1, 
            whom2:whom2, 
    
            firstNameRef1:firstNameRef1, 
            middleNameRef1:middleNameRef1, 
            lastNameRef1:lastNameRef1, 
            suffixRef1:suffixRef1, 
            homePhoneRef1:homePhoneRef1, 
            cellPhoneRef1:cellPhoneRef1, 
            streetRef1:streetRef1, 
            cityRef1:cityRef1, 
            stateRef1:stateRef1, 
            zipcodeRef1:zipcodeRef1, 
    
            firstNameRef2:firstNameRef2, 
            middleNameRef2:middleNameRef2, 
            lastNameRef2:lastNameRef2, 
            suffixRef2:suffixRef2, 
            homePhoneRef2:homePhoneRef2,
            cellPhoneRef2:cellPhoneRef2,
            streetRef2:streetRef2, 
            cityRef2:cityRef2, 
            stateRef2:stateRef2, 
            zipcodeRef2:zipcodeRef2, 
    
            preferedContact:preferedContact, 
            comment:comment,
        })
        .then((docRef: any) => {
            setName('registration_form_submit')
            setNeeded(true)
            setLoading(false)         
        })
        .catch((error: any) => {
            setLoading(false)
            setSubmitFormError(true);
        });

    }

    useEffect(()=> {
        formSubmitAttemt &&  applicationType1 === '' ? setApplication1Bool(true) : setApplication1Bool(false)
        formSubmitAttemt &&  desiredLoanType1 === '' ? setDesiredLoadType1Bool(true) : setDesiredLoadType1Bool(false)
        formSubmitAttemt &&  !desiredLoanAmount1 ? setDesiredLoadAmount1Bool(true) : setDesiredLoadAmount1Bool(false)
        formSubmitAttemt &&  desiredLoanTerm1 === '' ? setDesiredLoadTerm1Bool(true) : setDesiredLoadTerm1Bool(false) 

         // Part 2
         formSubmitAttemt && applicantName3 === '' ? setApplicantName3Bool(true) : setApplicantName3Bool(false) 
         formSubmitAttemt && socialSecurity3 === '' ? setSocialSecurity3Bool(true) : setSocialSecurity3Bool(false) 
         formSubmitAttemt && applicantEmail3 === '' ? setApplicantEmail3Bool(true) : setApplicantEmail3Bool(false) 
         formSubmitAttemt && brithday3 === '' ? setbrithday3Bool(true) : setbrithday3Bool(false) 
         formSubmitAttemt && maritalStatus === '' ? setMaritalStatusBool(true) : setMaritalStatusBool(false) 
         formSubmitAttemt && cellPhone === '' ? setCellPhoneBool(true) : setCellPhoneBool(false) 
         formSubmitAttemt && streetAddress === '' ? setStreetAddressBool(true) : setStreetAddressBool(false) 
         formSubmitAttemt && city === '' ? setCityBool(true) : setCityBool(false) 
         formSubmitAttemt && state === '' ? setStateBool(true) : setStateBool(false) 
         formSubmitAttemt && zipcode === '' ? setZipcodeBool(true) : setZipcodeBool(false) 
         formSubmitAttemt && currentAddressSince === '' ? setCurrentAddressSinceBool(true) : setCurrentAddressSinceBool(false)
         
         
         // Part 2 joint
         formSubmitAttemt && jointapplicantName3 === '' ? jointsetApplicantName3Bool(true) : jointsetApplicantName3Bool(false) 
         formSubmitAttemt && jointsocialSecurity3 === '' ? jointsetSocialSecurity3Bool(true) : jointsetSocialSecurity3Bool(false) 
         formSubmitAttemt && jointapplicantEmail3 === '' ? jointsetApplicantEmail3Bool(true) : jointsetApplicantEmail3Bool(false) 
         formSubmitAttemt && jointbrithday3 === '' ? jointsetbrithday3Bool(true) : jointsetbrithday3Bool(false) 
         formSubmitAttemt && jointmaritalStatus === '' ? jointsetMaritalStatusBool(true) : jointsetMaritalStatusBool(false) 
         formSubmitAttemt && jointcellPhone === '' ? jointsetCellPhoneBool(true) : jointsetCellPhoneBool(false) 
         formSubmitAttemt && jointstreetAddress === '' ? jointsetStreetAddressBool(true) : jointsetStreetAddressBool(false) 
         formSubmitAttemt && jointcity === '' ? jointsetCityBool(true) : jointsetCityBool(false) 
         formSubmitAttemt && jointstate === '' ? jointsetStateBool(true) : jointsetStateBool(false) 
         formSubmitAttemt && jointzipcode === '' ? jointsetZipcodeBool(true) : jointsetZipcodeBool(false) 
         formSubmitAttemt && jointcurrentAddressSince === '' ? jointsetCurrentAddressSinceBool(true) : jointsetCurrentAddressSinceBool(false)
 
    }, [ applicationType1, desiredLoanType1, desiredLoanAmount1, desiredLoanTerm1, applicantName3,socialSecurity3,applicantEmail3,brithday3,maritalStatus, cellPhone, streetAddress, city, state, zipcode, currentAddressSince, jointapplicantName3,jointsocialSecurity3,jointapplicantEmail3,jointbrithday3,jointmaritalStatus, jointcellPhone, jointstreetAddress, jointcity, jointstate, jointzipcode, jointcurrentAddressSince])

    function isValidDateOfBirth(dateOfBirth: string): boolean {
        // Regex to match MMDDYYYY format
        const regex = /^\d{8}$/;
      
        // Check if the format is valid (8 digits)
        if (!regex.test(dateOfBirth)) {
          return false;
        }
      
        // Extract month, day, and year
        const month = parseInt(dateOfBirth.substring(0, 2), 10);
        const day = parseInt(dateOfBirth.substring(2, 4), 10);
        const year = parseInt(dateOfBirth.substring(4), 10);
      
        // Check for valid ranges of month and year
        if (year < 1000 || year > 3000 || month === 0 || month > 12) {
          return false;
        }
      
        // Check for valid day based on month length (considering leap years)
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
          daysInMonth[1] = 29; // Leap year
        }
      
        return day > 0 && day <= daysInMonth[month - 1];
      }
    useEffect(()=> {
        if(brithday3.length === 8){
            setBrithdayValid(isValidDateOfBirth(brithday3))
        }

        if(jointbrithday3.length === 8){
            jointsetBrithdayValid(isValidDateOfBirth(brithday3))
        }
    }, [brithday3, jointbrithday3])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isSelected = e.target.checked;
      
        if (isSelected) {
          setAgree([...agree, value]);
        } else {
          setAgree(agree.filter((item) => item !== value));
        };
    };
    useEffect(()=>{
        if(agree[0] === 'agreed'){
            setNotAgreed(false)
        }else{
            setNotAgreed(true)
        }
    }, [agree])

  return (
    <>
        <main className={classes.main}>
                <header className={classes.header}>
                    <div className={classes.headerHalf}>
                        <a href="/" className={classes.logoLink}>
                            <svg className="header-nav__logo-large" width="130" height="25" viewBox="0 0 130 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5772_493)"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1534 1.30069C20.9832 0.108196 17.7594 0.128787 15.4653 2.2261C15.4419 2.21021 15.4209 2.19786 15.4033 2.18668C15.3747 2.16903 15.3543 2.15609 15.3414 2.14373C13.1706 0.23174 9.92573 -0.0359391 7.48727 1.46542C5.35852 2.78146 4.38735 5.31117 5.68926 7.73735C6.43312 9.15634 7.36339 10.4106 8.47948 11.5419C10.1332 13.1868 11.9931 14.5235 14.0184 15.696C14.1634 15.7989 14.3492 15.963 14.3696 16.1072C14.4111 16.6008 14.4316 17.0944 14.3492 17.5674C13.8741 20.0353 12.4273 21.742 10.0297 22.5027C7.5907 23.2633 5.46195 22.6262 3.66393 20.8372C2.92007 20.0971 2.46545 19.1717 2.13471 18.1845C1.92786 17.5674 1.36981 17.3003 0.791314 17.4444C0.233269 17.5885 -0.097468 18.1433 0.0264122 18.7604C0.0427737 18.8587 0.0725751 18.9434 0.104714 19.0364C0.112895 19.0605 0.12166 19.0846 0.12984 19.1099C1.34936 22.4415 3.68497 24.477 7.23951 24.8882C10.5878 25.2789 13.2331 23.9422 15.176 21.2278C15.2093 21.1778 15.2467 21.1278 15.2853 21.0748C15.3426 20.9978 15.4039 20.9142 15.4653 20.8166C15.4986 20.863 15.5296 20.9048 15.5588 20.9442C15.6195 21.0266 15.6715 21.0966 15.7136 21.166C18.8965 25.8754 25.4482 26.2866 29.1891 21.9885C29.9949 21.0631 30.553 20.0141 30.8837 18.8422C31.132 17.958 30.4495 17.1973 29.5818 17.4232C29.0857 17.5468 28.8788 17.9374 28.7345 18.3898C27.7014 21.5155 24.5389 23.3251 21.377 22.6056C18.1737 21.8861 16.3757 18.8422 16.541 16.6008C16.5825 16.066 16.7269 15.7989 17.1815 15.5106C18.6073 14.5852 20.0132 13.6392 21.3151 12.5903C22.9892 11.2537 24.3326 9.60816 25.3038 7.67558C26.5438 5.20763 25.5516 2.59614 23.1546 1.30069H23.1534Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.1313 5.86594C7.11961 5.7771 7.10851 5.68768 7.09448 5.59885C7.09448 4.01513 8.08669 2.94618 9.76083 2.78145C10.1331 2.74027 10.5257 2.71968 10.8974 2.76086C11.373 2.82263 11.6827 3.25445 11.6208 3.70686C11.5588 4.17985 11.2077 4.46754 10.7116 4.44694C9.49203 4.36458 8.87205 4.96112 8.91353 6.15362C8.91353 6.70898 8.66519 7.03784 8.16967 7.12021C7.7355 7.18198 7.34283 6.9143 7.21895 6.40071C7.17746 6.22245 7.15467 6.0442 7.13188 5.86594H7.1313Z" fill="#E0E0E0"></path><path d="M74.386 17.2791V17.8721C74.386 18.754 74.386 19.6358 74.386 20.5177C74.386 20.6071 74.3831 20.6971 74.3726 20.7854C74.299 21.3707 74.0582 21.6161 73.4698 21.6684C72.9801 21.712 72.4881 21.7155 71.999 21.6614C71.5152 21.6078 71.2814 21.3755 71.2014 20.8883C71.1768 20.7383 71.1692 20.5836 71.1692 20.4306C71.1675 16.8396 71.1681 13.248 71.1675 9.65698C71.1675 9.47755 71.1757 9.30047 71.2096 9.12339C71.2849 8.72569 71.5163 8.48508 71.909 8.42213C72.3589 8.35035 72.8147 8.35624 73.2635 8.41213C73.8023 8.47919 74.0185 8.75511 74.0389 9.31165C74.0407 9.36048 74.0454 9.40872 74.0483 9.45108C74.1207 9.48696 74.154 9.44284 74.1844 9.4046C75.6254 7.60321 78.7218 7.7997 80.1365 9.73405C80.708 10.5159 81.0136 11.4007 81.1124 12.3544C81.2146 13.341 81.1579 14.3187 80.8225 15.2659C80.1371 17.2008 78.4454 18.328 76.423 18.1809C75.7376 18.1309 75.1276 17.8803 74.6104 17.4109C74.5496 17.3556 74.5105 17.2579 74.3866 17.2791H74.386ZM77.9517 13.1856C77.9265 12.7156 77.8523 12.2132 77.5794 11.7643C77.2259 11.1842 76.7123 10.8824 76.0374 10.9118C75.38 10.9401 74.8739 11.2589 74.5882 11.8567C74.1628 12.7456 74.1529 13.6604 74.5911 14.5493C74.8891 15.1541 75.3911 15.4959 76.0707 15.5065C76.762 15.5171 77.2744 15.1871 77.6203 14.5905C77.8629 14.1728 77.9406 13.7092 77.9517 13.1851" fill="black"></path><path d="M62.916 9.46931C62.9639 9.44872 62.9931 9.44519 63.006 9.42931C64.4797 7.51496 67.9781 7.73675 69.318 10.2471C69.914 11.3637 70.0829 12.5626 69.9801 13.8104C69.9123 14.6358 69.6897 15.4159 69.2672 16.1319C68.2586 17.8409 66.4232 18.421 64.8601 18.1204C64.2348 18.0003 63.7054 17.6956 63.2718 17.2238C63.1602 17.2897 63.2152 17.3879 63.2152 17.4667C63.214 18.5151 63.2169 19.5635 63.2193 20.6124C63.2193 20.8183 63.2117 21.0231 63.1147 21.2101C62.982 21.4649 62.7728 21.6178 62.49 21.6514C61.9249 21.7184 61.3575 21.7196 60.7931 21.6543C60.3764 21.6061 60.1322 21.3637 60.0545 20.9489C60.0264 20.8001 60.0276 20.6436 60.0276 20.4906C60.0264 16.8596 60.0363 13.228 60.02 9.59698C60.0159 8.67039 60.432 8.34271 61.2278 8.38448C61.4166 8.39448 61.6059 8.38448 61.7946 8.38624C62.5829 8.39154 62.864 8.65686 62.916 9.47049V9.46931ZM66.7779 13.2151C66.7937 12.7279 66.6996 12.2573 66.4588 11.8249C66.1205 11.2189 65.6057 10.8948 64.915 10.913C64.2424 10.9307 63.7253 11.2536 63.4343 11.8661C63.0054 12.7697 62.9925 13.701 63.4623 14.5899C64.0952 15.7877 65.6846 15.8254 66.4127 14.6817C66.6955 14.2375 66.7948 13.7445 66.7779 13.2145" fill="black"></path><path d="M104.522 9.46814C104.57 9.44696 104.599 9.44402 104.612 9.42754C106.098 7.50025 109.644 7.74028 110.96 10.3153C111.524 11.419 111.682 12.5909 111.585 13.811C111.526 14.5446 111.341 15.2441 111.002 15.8989C110.031 17.7744 108.117 18.4369 106.465 18.1198C105.839 17.9997 105.31 17.6962 104.877 17.2244C104.762 17.2908 104.821 17.3891 104.821 17.4679C104.819 18.5416 104.817 19.6158 104.825 20.6901C104.83 21.2701 104.49 21.6508 103.944 21.6731C103.44 21.6937 102.936 21.7196 102.434 21.6602C101.939 21.6014 101.678 21.3072 101.639 20.7971C101.63 20.6701 101.633 20.5418 101.633 20.4136C101.633 16.8208 101.647 13.228 101.624 9.63522C101.618 8.56332 102.122 8.34212 102.869 8.3833C103.045 8.39271 103.222 8.3833 103.399 8.38507C104.189 8.38977 104.47 8.65451 104.522 9.46814ZM108.385 13.2368C108.399 12.7409 108.308 12.2438 108.045 11.7914C107.704 11.2048 107.194 10.8948 106.519 10.913C105.864 10.9301 105.35 11.2372 105.057 11.8319C104.608 12.7438 104.593 13.6869 105.067 14.5893C105.69 15.7748 107.251 15.8289 107.996 14.7129C108.288 14.2752 108.395 13.7834 108.385 13.2368Z" fill="black"></path><path d="M38.5513 11.2819C38.5513 9.49285 38.5513 7.70322 38.5513 5.91418C38.5513 5.82476 38.549 5.73533 38.5513 5.64591C38.5717 5.03349 38.8885 4.7005 39.4962 4.68639C40.1132 4.67227 40.7309 4.68168 41.3479 4.68168C42.2297 4.68168 43.1121 4.67756 43.9938 4.68227C46.3505 4.69521 48.0498 6.3054 48.242 8.68569C48.2981 9.38107 48.2595 10.0629 48.0801 10.7359C47.5735 12.6379 46.0379 13.851 44.0938 13.8787C43.4136 13.8887 42.7334 13.8787 42.0527 13.8816C41.7926 13.8828 41.7874 13.8887 41.7862 14.1599C41.7833 15.0288 41.7856 15.8983 41.785 16.7672C41.785 16.8826 41.7903 16.9985 41.7774 17.112C41.7167 17.6474 41.4151 17.9433 40.8822 17.9627C40.4294 17.9792 39.9747 17.9762 39.5219 17.9662C38.8756 17.9521 38.556 17.6209 38.5525 16.9561C38.5466 15.8824 38.5507 14.8088 38.5507 13.7351L38.5513 11.2819ZM41.7862 9.29164C41.7862 9.80229 41.7926 10.3129 41.7827 10.823C41.7792 11.0066 41.8388 11.0677 42.0199 11.063C42.5102 11.0507 43.0022 11.0748 43.4913 11.0483C44.1563 11.0124 44.6308 10.6777 44.861 10.0306C45.0053 9.62521 45.024 9.20399 44.9405 8.78452C44.7728 7.94795 44.2474 7.51614 43.399 7.50614C42.9461 7.50084 42.4933 7.5132 42.0404 7.50143C41.8464 7.49672 41.7774 7.55732 41.7821 7.76028C41.7944 8.27035 41.7862 8.78099 41.7862 9.29164Z" fill="black"></path><path d="M95.8874 18.1974C94.5259 18.1727 93.2497 17.8303 92.0775 17.1149C91.8934 17.0026 91.721 16.8755 91.5697 16.7184C91.2916 16.429 91.2185 16.0907 91.3979 15.7348C91.6445 15.2447 91.9594 14.7952 92.3171 14.3811C92.5146 14.1522 92.7834 14.0999 93.0785 14.1687C93.38 14.2387 93.6348 14.4052 93.8965 14.5564C94.4499 14.8753 95.0319 15.1059 95.6718 15.1676C96.0294 15.2024 96.3806 15.1676 96.7113 15.0317C97.3319 14.7758 97.4616 14.1293 96.9982 13.6357C96.7873 13.411 96.5296 13.2474 96.2532 13.1198C95.6922 12.8597 95.126 12.6109 94.5639 12.3538C94 12.0961 93.4577 11.8031 92.9534 11.4348C90.8948 9.93231 91.2261 7.05255 92.6659 5.72769C93.3607 5.0882 94.1735 4.70815 95.0851 4.55284C96.5173 4.3081 97.8946 4.5246 99.2117 5.14056C99.4524 5.25292 99.685 5.38117 99.8808 5.56708C100.189 5.85888 100.289 6.20951 100.14 6.61132C99.9672 7.07844 99.737 7.52084 99.4752 7.94148C99.2678 8.27446 98.9709 8.35859 98.5829 8.24858C98.2896 8.16563 98.0284 8.0062 97.7538 7.87853C97.0999 7.57497 96.4261 7.40436 95.701 7.5179C95.4994 7.54967 95.306 7.60379 95.133 7.7144C94.7281 7.97384 94.627 8.43331 94.8823 8.84689C95.0267 9.08103 95.2394 9.23929 95.469 9.37754C95.9476 9.66581 96.47 9.85701 96.9819 10.0712C97.6807 10.3635 98.3755 10.6653 98.9978 11.1113C99.7236 11.6313 100.242 12.2991 100.43 13.1974C100.874 15.3147 99.6955 17.325 97.6404 17.9509C97.0701 18.1245 96.4857 18.2121 95.8874 18.1974Z" fill="black"></path><path d="M117.93 18.1945C116.525 18.1815 115.244 17.8003 114.169 16.8478C113.18 15.9707 112.667 14.85 112.598 13.5227C112.517 11.969 112.99 10.6265 114.132 9.56285C114.904 8.84394 115.828 8.42566 116.859 8.25682C118.34 8.01502 119.755 8.20975 121.037 9.02808C122.497 9.96114 123.229 11.3237 123.289 13.0827C123.377 15.6089 121.657 17.6579 119.021 18.1068C118.661 18.168 118.298 18.2074 117.93 18.1939V18.1945ZM115.83 13.2298C115.833 13.2839 115.834 13.4116 115.846 13.5386C115.944 14.5882 116.722 15.3847 117.761 15.4836C118.652 15.5683 119.639 15.0417 119.949 13.9722C120.073 13.5469 120.098 13.1198 120.014 12.6862C119.741 11.2742 118.47 10.5706 117.232 10.9983C116.37 11.296 115.844 12.1338 115.829 13.2298" fill="black"></path><path d="M86.2633 14.0457C86.4363 13.1962 86.6543 12.3608 86.8804 11.5272C87.0808 10.7889 87.2719 10.0482 87.4747 9.30988C87.6587 8.64157 87.9889 8.39036 88.6772 8.38448C89.0927 8.38095 89.5088 8.38565 89.9248 8.38271C90.0645 8.38154 90.2012 8.39683 90.3356 8.43507C90.7224 8.54509 90.9264 8.83512 90.8738 9.23811C90.851 9.41284 90.7937 9.58639 90.7329 9.75288C89.6139 12.818 88.492 15.8813 87.3718 18.9457C87.2088 19.3911 87.0014 19.8129 86.7267 20.1983C85.6878 21.6561 83.7331 22.2556 82.0742 21.6272C81.5734 21.4378 81.3701 21.0654 81.4939 20.5401C81.5828 20.1647 81.7516 19.82 81.9468 19.4923C82.118 19.2046 82.3827 19.0781 82.7152 19.1064C82.79 19.1128 82.8671 19.1181 82.939 19.1393C83.9447 19.4335 84.5407 18.7181 84.8317 17.8421C84.8773 17.7044 84.7873 17.5944 84.7388 17.4809C84.075 15.9219 83.4082 14.364 82.7421 12.8062C82.3114 11.7984 81.8802 10.7918 81.4519 9.78288C81.3724 9.5958 81.2859 9.41166 81.269 9.20222C81.2362 8.79158 81.4028 8.54097 81.7896 8.43331C81.8136 8.42625 81.8381 8.4186 81.8632 8.41683C82.5417 8.36389 83.2218 8.34624 83.8979 8.42213C84.3636 8.47449 84.6237 8.79923 84.761 9.23164C85.0041 9.99702 85.2448 10.7636 85.4827 11.5307C85.724 12.3097 85.9986 13.0792 86.1435 13.8857C86.1546 13.9487 86.1728 14.0104 86.2645 14.0452" fill="black"></path><path d="M55.6322 16.7508C55.5363 16.7543 55.5165 16.8237 55.4814 16.8708C54.8439 17.7244 53.9715 18.1133 52.943 18.1862C52.5141 18.2162 52.0858 18.1833 51.6663 18.0868C50.4432 17.8062 49.6684 16.9584 49.4469 15.6671C49.3885 15.3271 49.3593 14.9841 49.3604 14.6382C49.3634 12.938 49.3616 11.2383 49.3622 9.53815C49.3622 9.43578 49.3599 9.33283 49.3704 9.23164C49.4165 8.77688 49.6479 8.49155 50.0944 8.42742C50.6682 8.34506 51.2508 8.34388 51.8246 8.42801C52.2705 8.4939 52.4972 8.77864 52.5404 9.23811C52.5521 9.36518 52.5492 9.49343 52.5492 9.6211C52.5492 11.0401 52.5492 12.4585 52.5504 13.8775C52.5504 14.0557 52.5568 14.2328 52.5843 14.4117C52.6877 15.0782 53.1487 15.32 53.7617 15.2418C54.4769 15.1506 54.9573 14.7388 55.2442 14.0834C55.4358 13.6457 55.5112 13.1821 55.5095 12.7026C55.506 11.6931 55.5083 10.683 55.5089 9.67345C55.5089 9.57109 55.5042 9.46872 55.5118 9.36695C55.5626 8.70628 55.8747 8.40389 56.5315 8.38742C56.8716 8.37918 57.2117 8.38389 57.5517 8.38742C57.6774 8.3886 57.8042 8.39036 57.9275 8.41154C58.3961 8.49272 58.6123 8.7104 58.6871 9.18222C58.7134 9.34518 58.7245 9.51226 58.7245 9.67757C58.7268 12.0167 58.7274 14.3558 58.7245 16.6949C58.7245 16.8731 58.7117 17.0532 58.6813 17.2285C58.6076 17.6562 58.3488 17.9162 57.9205 17.9521C57.4308 17.9939 56.9376 17.9921 56.4479 17.9527C56.0295 17.9192 55.7899 17.6821 55.7023 17.2626C55.6672 17.0949 55.6544 16.922 55.6322 16.752" fill="black"></path><path d="M127.895 7.51084C127.895 7.77911 127.902 8.04797 127.893 8.31565C127.886 8.48508 127.956 8.53979 128.115 8.5345C128.354 8.52685 128.594 8.52861 128.833 8.53391C129.521 8.5492 129.843 8.87924 129.855 9.57874C129.857 9.77053 129.862 9.96231 129.851 10.1535C129.818 10.7042 129.505 11.0236 128.962 11.0489C128.673 11.0624 128.383 11.0572 128.093 11.0519C127.948 11.0495 127.894 11.1095 127.895 11.2554C127.899 12.1885 127.884 13.1215 127.906 14.054C127.917 14.5387 128.219 14.89 128.682 15.027C128.875 15.0841 129.079 15.0988 129.274 15.1459C129.746 15.2588 129.946 15.4724 129.981 15.9624C130.007 16.3313 130.009 16.7049 129.982 17.0732C129.942 17.605 129.652 17.8862 129.103 17.9503C128.599 18.0092 128.096 17.9745 127.601 17.865C127.106 17.7556 126.632 17.5873 126.199 17.315C125.201 16.6872 124.746 15.7512 124.726 14.587C124.708 13.5522 124.722 12.5167 124.722 11.4819C124.722 11.3925 124.72 11.3031 124.721 11.2136C124.722 11.1042 124.674 11.0519 124.562 11.0542C124.462 11.056 124.36 11.0554 124.261 11.0419C123.811 10.9824 123.529 10.693 123.493 10.2347C123.475 9.99349 123.481 9.74935 123.486 9.50697C123.499 8.90395 123.792 8.5898 124.382 8.53567C124.663 8.50979 124.804 8.35349 124.805 8.06679C124.805 7.72146 124.808 7.37671 124.803 7.03137C124.802 6.86429 124.818 6.69957 124.851 6.53661C124.934 6.12774 125.186 5.86241 125.593 5.83947C126.095 5.81123 126.601 5.81064 127.103 5.83711C127.551 5.86064 127.839 6.1648 127.879 6.62956C127.905 6.92077 127.884 7.21669 127.884 7.51025H127.897L127.895 7.51084Z" fill="black"></path></g><defs><clipPath id="clip0_5772_493"><rect width="130" height="24.4706" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>
                        </a>
                        <address className={classes.formHeaderAddress}>
                        333 Washington Street, 3rd Floor,<br />
                        Jersey City, NJ 07302<br />
                        Phone: (502) 382-0019
                        </address>
                    </div>
                    <div className={classes.headerHalf}>
                        <h1 className={classes.formHeaderH1}>Secure Loan Application Form</h1>
                    </div>
                </header>

                <form onSubmit={formSubmitHandler} className={classes.formBody}>


                    <FieldSet1  
                        classes={classes} 
                        accountNo1={accountNo1} 
                        applicationType1={applicationType1} 
                        desiredLoanType1={desiredLoanType1} 
                        desiredLoanAmount1={desiredLoanAmount1}
                        desiredLoanTerm1={desiredLoanTerm1}
                        setAccountNo1={setAccountNo1} 
                        setApplication1={setApplication1} 
                        setDesiredLoadType1={setDesiredLoadType1} 
                        setDesiredLoadAmount1={setDesiredLoadAmount1} 
                        setDesiredLoadTerm1={setDesiredLoadTerm1} 
                        accountNo1Bool={accountNo1Bool} 
                        application1Bool={applicationType1Bool} 
                        desiredLoadType1Bool={desiredLoanType1Bool} 
                        desiredLoadAmount1Bool={desiredLoanAmount1Bool} 
                        desiredLoadTerm1Bool={desiredLoanTerm1Bool}/>
                    <FieldSet2 classes={classes} paymentProtection={paymentProtection} setPaymentProtection={setPaymentProtection}/>
                    <FieldSet3 
                        classes={classes} 

                        applicantName3={applicantName3}
                        setApplicantName3={setApplicantName3}
                        applicantName3Bool={applicantName3Bool}
                        driverLicense3={driverLicense3}
                        setDriverLicense3={setDriverLicense3}
                        driverLicenseState3={driverLicenseState3}
                        setDriverLicenseState3={setDriverLicenseState3}
                        socialSecurity3={socialSecurity3}
                        setSocialSecurity3={setSocialSecurity3}
                        socialSecurity3Bool={socialSecurity3Bool}
                        applicantEmail3={applicantEmail3}
                        setApplicantEmail3={setApplicantEmail3}
                        applicantEmail3Bool={applicantEmail3Bool}
                        usCitizen={usCitizen}
                        setUsCitizen={setUsCitizen}
                        brithday3={brithday3}
                        setbrithday3={setbrithday3}
                        brithdayValid={brithdayValid}
                        brithday3Bool={brithday3Bool}
                        maritalStatus={maritalStatus}
                        setMaritalStatus={setMaritalStatus}
                        maritalStatusBool={maritalStatusBool}
                        homePhone={homePhone}
                        setHomePhone={setHomePhone}
                        cellPhone={cellPhone}
                        setCellPhone={setCellPhone}
                        cellPhoneBool={cellPhoneBool}
                        streetAddress={streetAddress}
                        setStreetAddress={setStreetAddress}
                        streetAddressBool={streetAddressBool}
                        city={city}
                        setCity={setCity}
                        cityBool={cityBool}
                        state={state}
                        setState={setState}
                        stateBool={stateBool}
                        zipcode={zipcode}
                        setZipcode={setZipcode}
                        zipcodeBool={zipcodeBool}
                        currentAddressSince={currentAddressSince}
                        setCurrentAddressSince={setCurrentAddressSince}
                        currentAddressSinceBool={currentAddressSinceBool}
                        previousAddress={previousAddress}
                        setPreviousAddress={setPreviousAddress}
                        employerName={employerName}
                        setEmployerName={setEmployerName}
                        employerPhone={employerPhone}
                        setEmployerPhone={setEmployerPhone}
                        employerAddress={employerAddress}
                        setEmployerAddress={setEmployerAddress}
                        jobTitle={jobTitle}
                        setJobTitle={setJobTitle}
                        dateHire={dateHire}
                        setDateHire={setDateHire}
                        monthlyGrossIncome={monthlyGrossIncome}
                        setMonthlyGrossIncome={setMonthlyGrossIncome}
                        otherIncome={otherIncome}
                        setOtherIncome={setOtherIncome}
                        prevEmployer={prevEmployer}
                        setPrevEmployer={setPrevEmployer}
                        yearsEmployed={yearsEmployed}
                        setYearsEmployed={setYearsEmployed}
                    />
                    <FieldSet4 
                        applicationType1={applicationType1}
                        classes={classes} 

                        jointapplicantName3={jointapplicantName3}
                        jointsetApplicantName3={jointsetApplicantName3}
                        jointapplicantName3Bool={jointapplicantName3Bool}
                        jointdriverLicense3={jointdriverLicense3}
                        jointsetDriverLicense3={jointsetDriverLicense3}
                        jointdriverLicenseState3={jointdriverLicenseState3}
                        jointsetDriverLicenseState3={jointsetDriverLicenseState3}
                        jointsocialSecurity3={jointsocialSecurity3}
                        jointsetSocialSecurity3={jointsetSocialSecurity3}
                        jointsocialSecurity3Bool={jointsocialSecurity3Bool}
                        jointapplicantEmail3={jointapplicantEmail3}
                        jointsetApplicantEmail3={jointsetApplicantEmail3}
                        jointapplicantEmail3Bool={jointapplicantEmail3Bool}
                        jointusCitizen={jointusCitizen}
                        jointsetUsCitizen={jointsetUsCitizen}
                        jointbrithday3={jointbrithday3}
                        jointsetbrithday3={jointsetbrithday3}
                        jointbrithdayValid={jointbrithdayValid}
                        jointbrithday3Bool={jointbrithday3Bool}
                        jointmaritalStatus={jointmaritalStatus}
                        jointsetMaritalStatus={jointsetMaritalStatus}
                        jointmaritalStatusBool={jointmaritalStatusBool}
                        jointhomePhone={jointhomePhone}
                        jointsetHomePhone={jointsetHomePhone}
                        jointcellPhone={jointcellPhone}
                        jointsetCellPhone={jointsetCellPhone}
                        jointcellPhoneBool={jointcellPhoneBool}
                        jointstreetAddress={jointstreetAddress}
                        jointsetStreetAddress={jointsetStreetAddress}
                        jointstreetAddressBool={jointstreetAddressBool}
                        jointcity={jointcity}
                        jointsetCity={jointsetCity}
                        jointcityBool={jointcityBool}
                        jointstate={jointstate}
                        jointsetState={jointsetState}
                        jointstateBool={jointstateBool}
                        jointzipcode={jointzipcode}
                        jointsetZipcode={jointsetZipcode}
                        jointzipcodeBool={jointzipcodeBool}
                        jointcurrentAddressSince={jointcurrentAddressSince}
                        jointsetCurrentAddressSince={jointsetCurrentAddressSince}
                        jointcurrentAddressSinceBool={jointcurrentAddressSinceBool}
                        jointpreviousAddress={jointpreviousAddress}
                        jointsetPreviousAddress={jointsetPreviousAddress}
                        jointemployerName={jointemployerName}
                        jointsetEmployerName={jointsetEmployerName}
                        jointemployerPhone={jointemployerPhone}
                        jointsetEmployerPhone={jointsetEmployerPhone}
                        jointemployerAddress={jointemployerAddress}
                        jointsetEmployerAddress={jointsetEmployerAddress}
                        jointjobTitle={jointjobTitle}
                        jointsetJobTitle={jointsetJobTitle}
                        jointdateHire={jointdateHire}
                        jointsetDateHire={jointsetDateHire}
                        jointmonthlyGrossIncome={jointmonthlyGrossIncome}
                        jointsetMonthlyGrossIncome={jointsetMonthlyGrossIncome}
                        jointotherIncome={jointotherIncome}
                        jointsetOtherIncome={jointsetOtherIncome}
                        jointprevEmployer={jointprevEmployer}
                        jointsetPrevEmployer={jointsetPrevEmployer}
                        jointyearsEmployed={jointyearsEmployed}
                        jointsetYearsEmployed={jointsetYearsEmployed}
                    />
                    <FieldSet5 
                        classes={classes}

                        lender1={lender1}
                        setLender1={setLender1}
                        lender2={lender2}
                        setLender2={setLender2}
                        lender3={lender3}
                        setLender3={setLender3}
                        lender4={lender4}
                        setLender4={setLender4}
                        lender5={lender5}
                        setLender5={setLender5}
                        lender6={lender6}
                        setLender6={setLender6}
                        lender7={lender7}
                        setLender7={setLender7}
                        lender8={lender8}
                        setLender8={setLender8}

                        lender1Type={lender1Type}
                        setLender1Type={setLender1Type}
                        lender2Type={lender2Type}
                        setLender2Type={setLender2Type}
                        lender3Type={lender3Type}
                        setLender3Type={setLender3Type}
                        lender4Type={lender4Type}
                        setLender4Type={setLender4Type}
                        lender5Type={lender5Type}
                        setLender5Type={setLender5Type}
                        lender6Type={lender6Type}
                        setLender6Type={setLender6Type}
                        lender7Type={lender7Type}
                        setLender7Type={setLender7Type}
                        lender8Type={lender8Type}
                        setLender8Type={setLender8Type}

                        lender1Balance={lender1Balance}
                        setLender1Balance={setLender1Balance}
                        lender2Balance={lender2Balance}
                        setLender2Balance={setLender2Balance}
                        lender3Balance={lender3Balance}
                        setLender3Balance={setLender3Balance}
                        lender4Balance={lender4Balance}
                        setLender4Balance={setLender4Balance}
                        lender5Balance={lender5Balance}
                        setLender5Balance={setLender5Balance}
                        lender6Balance={lender6Balance}
                        setLender6Balance={setLender6Balance}
                        lender7Balance={lender7Balance}
                        setLender7Balance={setLender7Balance}
                        lender8Balance={lender8Balance}
                        setLender8Balance={setLender8Balance}

                        lender1Min={lender1Min}
                        setLender1Min={setLender1Min}
                        lender2Min={lender2Min}
                        setLender2Min={setLender2Min}
                        lender3Min={lender3Min}
                        setLender3Min={setLender3Min}
                        lender4Min={lender4Min}
                        setLender4Min={setLender4Min}
                        lender5Min={lender5Min}
                        setLender5Min={setLender5Min}
                        lender6Min={lender6Min}
                        setLender6Min={setLender6Min}
                        lender7Min={lender7Min}
                        setLender7Min={setLender7Min}
                        lender8Min={lender8Min}
                        setLender8Min={setLender8Min}
                        childSupportPayment={childSupportPayment}

                        setChildSupportPayment={setChildSupportPayment}

                        asses1={asses1} 
                        setAsses1={setAsses1}
                        asses1value={asses1value} 
                        setAsses1value={setAsses1value}
                        asses2={asses2} 
                        setAsses2={setAsses2}
                        asses2Value={asses2Value} 
                        setAsses2Value={setAsses2Value}

                        bankruptcy={bankruptcy} 
                        setBankruptcy={setBankruptcy}
                        lawsuit={lawsuit}
                        setLawsuit={setLawsuit}
                        foreclosed={foreclosed}
                        setForeclosed={setForeclosed}
                        decline={decline} 
                        setDecline={setDecline}
                        endorser={endorser}
                        setEndorser={setEndorser}
                        whom1={whom1} 
                        setWhom1={setWhom1}
                        whom2={whom2} 
                        setWhom2={setWhom2}
                    />
                    <FieldSet6 
                        classes={classes} 

                        firstNameRef1={firstNameRef1} 
                        setFirstNameRef1={setFirstNameRef1}
                        middleNameRef1={middleNameRef1} 
                        setMiddleNameRef1={setMiddleNameRef1}
                        lastNameRef1={lastNameRef1} 
                        setLastNameRef1={setLastNameRef1}
                        suffixRef1={suffixRef1} 
                        setSuffixRef1={setSuffixRef1}
                        homePhoneRef1={homePhoneRef1} 
                        setHomePhoneRef1={setHomePhoneRef1}
                        cellPhoneRef1={cellPhoneRef1} 
                        setCellPhoneRef1={setCellPhoneRef1}
                        streetRef1={streetRef1} 
                        setStreetRef1={setStreetRef1}
                        cityRef1={cityRef1} 
                        setCityRef1={setCityRef1}
                        stateRef1={stateRef1} 
                        setStateRef1={setStateRef1}
                        zipcodeRef1={zipcodeRef1} 
                        setZipcodeRef1={setZipcodeRef1}

                        firstNameRef2={firstNameRef2} 
                        setFirstNameRef2={setFirstNameRef2}
                        middleNameRef2={middleNameRef2} 
                        setMiddleNameRef2={setMiddleNameRef2}
                        lastNameRef2={lastNameRef2} 
                        setLastNameRef2={setLastNameRef2}
                        suffixRef2={suffixRef2} 
                        setSuffixRef2={setSuffixRef2}
                        homePhoneRef2={homePhoneRef2} 
                        setHomePhoneRef2={setHomePhoneRef2}
                        cellPhoneRef2={cellPhoneRef2} 
                        setCellPhoneRef2={setCellPhoneRef2}
                        streetRef2={streetRef2} 
                        setStreetRef2={setStreetRef2}
                        cityRef2={cityRef2} 
                        setCityRef2={setCityRef2}
                        stateRef2={stateRef2} 
                        setStateRef2={setStateRef2}
                        zipcodeRef2={zipcodeRef2} 
                        setZipcodeRef2={setZipcodeRef2}
                    
                    />
                    <FieldSet7 
                        classes={classes}

                        preferedContact={preferedContact}
                        setPreferedContact={setPreferedContact}
                        comment={comment}
                        setComment={setComment}
                    />


{/* Form Submit */}
                    <fieldset className={classes.fieldset}>
                        <legend className={classes.fieldsetTitle}>Submit Application</legend>


                        <p style={{margin: '0 0 13px', lineHeight: '1.25'}}>You agree that everything stated in this application is correct to the best of your knowledge. Puppy Spot is authorized to investigate your creditworthiness, employment history, and to obtain a credit report to answer questions about their credit experience with you. You understand that any false or misleading statement in your application may cause any loan or extension of credit to be in default. You authorize us to accept your facsimile signatures on this application and agree that your facsimile signature will have the same legal force and effect as your original signature. You assume any risk that may be associated with permitting us to accept your facsimile signature.</p>
                        <p style={{margin: '0 0 13px', lineHeight: '1.25'}}>By pressing the "Submit Form" button below, you agree to the above statement. You understand that we may require additional information to finalize our credit decision and your signature on additional documents prior to disbursing any credit proceeds.</p>

                        <div className='checkbox-options' style={{display: 'inline-block', margin: '0 0 5px 0px'}}>
                            <label className={classes.checkLabel} htmlFor="agree">
                                <input 
                                    className={classes.checkInput} 
                                    type="checkbox" 
                                    name="agree" 
                                    id="agree" 
                                    value="agreed" 
                                    onChange={handleChange}
                                />
                                <span className="checkSpan">I have read and agree to the teams and conditions</span>
                            </label>
                        </div>
                        {/* <ReCAPTCHA
                            ref={recaptchaRef}
                            // size="invisible"
                            sitekey="6LemB74pAAAAAMAg4aaIjSPQ2-t7IjU2WrlDIuOW"
                            
                        /> */}

                        <div className="field-button">
                            <input disabled={notAgreed || loading}  type="submit" className={notAgreed || loading ? classes.disableSubmitBtn : classes.submitButton} value="Submit Form" />
                        </div>
                        {submitFormError && <p style={{color: '#e74c3c'}}>An error occurred. Please try again in a few minutes</p>}
                    </fieldset>


                </form>

        </main>

        <Popup needed={needed} setNeeded={setNeeded} name={name} setName={setName} />
    </>
  )
}

export default LoadApplicationContainer
