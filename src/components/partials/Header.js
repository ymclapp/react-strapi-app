import React from 'react';
// import { MDBTypography } from 'mdb-react-ui-kit';
import { Alert } from 'react-bootstrap';

import './Header.css';

const user = JSON.parse(localStorage.getItem('user'));

export default function Header() {
  return (
    <>
      <Alert variant='primary' className='note'>
        <Alert.Heading><strong>Note:</strong></Alert.Heading>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque
          officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus delectus placeat illo rem id nisi
          consequatur esse, sint perspiciatis soluta porro?
        </p>
        <hr />
        <p className='mb-0'>
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
        </p>
      </Alert>
      <header>
        <div
          className='p-5 text-center bg-img'
          style={{ backgroundImage: "url('https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2015/05/cysticDiagnosis-1248216538-770x553-1-650x428.jpg')", height: 300 }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                {/* <h1 className='mb-3'>American Thoracic Society</h1> */}
                {user && <h1 className='mb-3'>Welcome {user.prefix} {user.lastName}!</h1>}
                {!user && <h1 className='mb-3'>Welcome!</h1>}
                <h4 className='mb-3'>Subheading</h4>
                <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
