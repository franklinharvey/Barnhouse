(function() {
		// Initialize Firebase
var config = {
		apiKey: "AIzaSyBbAS6KCerk3PJlzmxnYitajzij4cZ9CZU",
		authDomain: "barnhouse-78075.firebaseapp.com",
		databaseURL: "https://barnhouse-78075.firebaseio.com",
		storageBucket: "barnhouse-78075.appspot.com",
		messagingSenderId: "727310305344"
	};
	firebase.initializeApp(config);

	const txtEmail = document.getElementById('txtEmail');
	const txtFirstName = document.getElementById('txtFirstName');
	const txtLastName = document.getElementById('txtLastName');
	const btnSignUp = document.getElementById('btnSignUp');

	btnSignUp.addEventListener('click', e => {
		const email = txtEmail.value;
		const firstName = txtFirstName.value;
		const lastName = txtLastName.value;

		if (email == "") {
			alert("Please enter an email address");
			return;
		}
		if (firstName == "") {
			alert("Please enter an email address");
			return;
		}
		if (lastName == "") {
			alert("Please enter an email address");
			return;
		}
		saveUser(email,firstName,lastName);
		clearField(txtEmail,txtFirstName,txtLastName);
	});

	function saveUser(email,firstName,lastName) {
		const entry = firstName+lastName;
		firebase.database().ref("EmailList/" + entry).set({
			FirstName : firstName,
			LastName : lastName,
			Email : email
		});
	};
	function clearField(txtEmail,txtFirstName,txtLastName) {
			txtEmail.value = "";
			txtFirstName.value = "";
			txtLastName.value = "";
	};

}());