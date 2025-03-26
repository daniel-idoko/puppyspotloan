import React, { useEffect, useState } from 'react'
import LoadApplicationContainer from '../containers/LoadApplication'
import Nav from '../components/nav/Nav';

const LoadApplication: React.FC= () => {

  useEffect(() => {
    document.title = 'Loan Application Form | Puppy Spot Adoption';

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = "Elite Community Credit Union secure and reliable banking for all your needs. Get competitive rates, manage your finances on the go, and experience exceptional customer service. Open an account today";
    document.head.appendChild(metaDescription);
  }, []);

  return (
    <div>
      <LoadApplicationContainer />
    </div>
  )
}

export default LoadApplication