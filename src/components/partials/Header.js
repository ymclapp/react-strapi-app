import React from 'react';
// import {
//   MDBNavbar,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBContainer,
//   MDBIcon
// } from 'mdb-react-ui-kit';

import './Header.css';

const user = JSON.parse(localStorage.getItem('user'));

export default function Header() {
  return (
    <header>
      <div
        className='p-5 text-center bg-img'
        style={{ backgroundImage: "url('https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2015/05/cysticDiagnosis-1248216538-770x553-1-650x428.jpg')", height: 400 }}
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
  );
}
