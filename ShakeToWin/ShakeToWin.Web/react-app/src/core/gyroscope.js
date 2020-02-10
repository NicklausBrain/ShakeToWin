function grantMotionAccess() {
	// function addMotionListener() {
	// 	var handleMotion = createMotionHandler();
	// 	window.addEventListener('devicemotion', handleMotion);
	// };

	if (typeof DeviceMotionEvent.requestPermission === 'function') { // iOS 13
		DeviceMotionEvent
			.requestPermission()
			.then(response => {
				if (response === 'granted') {
					//addMotionListener();
					return Promise.resolve();
				}
				return Promise.reject(response);
			});
		//.catch(alert);
	} else { // Other OS
		return Promise.resolve(); // addMotionListener();
	}

	// document.getElementById('grantMotionAccess').remove();
}

export { grantMotionAccess }