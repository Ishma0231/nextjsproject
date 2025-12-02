import React from 'react';

function Footer() {
  return (
    <div style={{
      backgroundColor: '#7F1F0E', // dark background
      padding: '20px',
      color: '#fff',
      position: 'relative',
      fontFamily: 'Arial, sans-serif',
      position:"relative",
      
      
    }}>
      {/* Top section with logo and menu */}
      <div style={{
        display: 'flex',
        justifyContent: "end",
        alignItems: 'center',
        marginBottom: '50px',
        position:"relative"
      }}>
        {/* Logo / Brand */}
        <div style={{
      position: 'absolute',
      top: '50%',
      left: '20px',
      transform: 'translateY(-50%)',
      width: '80px', // make it bigger
      height: 'auto'
    }}><img src="/Images/E7.svg" 
        style={{height:"100%",width:"100%"}}/></div>
         <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            color: '#000',
            padding: '8px 12px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
        >
          Visit site
          <span style={{ marginLeft: '8px', fontSize: '16px' }}>→</span>
        </a>
       
      </div>

      {/* Social icons and button */}
      <div style={{
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
      }}>
      
       
        <div style={{ display: 'flex', gap: '10px' }}>
          {/* Replace these with actual icons or SVGs as needed */}
          <a href="#" style={{ color: '#fff', fontSize: '20px' }}><i className="fa-brands fa-twitter"></i></a>
          <a href="#" style={{ color: '#fff', fontSize: '20px' }}><i className="fa-brands fa-instagram"></i></a>
          <a href="#" style={{ color: '#fff', fontSize: '20px' }}><i className="fa-brands fa-facebook"></i></a>
          <a href="#" style={{ color: '#fff', fontSize: '20px' }}><i className="fa-brands fa-whatsapp"></i></a>
        </div>
       

       
      </div>

      {/* Terms & Conditions */}
      <div style={{ marginTop: '20px', fontSize: '12px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Terms & Conditions</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Privacy Policy</a>
      </div>

      {/* Copyright */}
      <div style={{ marginTop: '10px', textAlign: 'center', fontSize: '12px' }}>
        © 2023 Flaunter. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;