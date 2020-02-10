import React, { Component } from 'react';

function MotionAccess(props) {
	return !props.motionAccessGranted
		? (<div id="grantMotionAccess" className={"gameButton"} style={{ top: '2rem' }} onClick={props.grantMotionAccess}>
			<div>Grant Motion Access</div>
		</div>)
		: null
}

export default MotionAccess;