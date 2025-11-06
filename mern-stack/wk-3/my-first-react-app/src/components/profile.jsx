import React from 'react';

function Profile(props){
	return(
	<div style={{
      border: '2px solid #007BFF',
      borderRadius: '10px',
      padding: '15px',
      width: '250px',
      margin: '20px auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    	}}>
      <h2>{props.firstName} {props.lastName}</h2>
      <p>Age: {props.age}</p>
      <p>Hello {props.firstName}! Nice to meet you 👋</p>
    	</div>
	);
}

export default Profile
