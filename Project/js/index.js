
//Function for registration 

const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('details');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
	var newPost = snapshot.val();
});

function send(){
	var first = document.getElementById("firstname").value;
	var last = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	detailsRef.push().set({
		first: first,
		last: last,
		email: email,
		password: password
	});
}