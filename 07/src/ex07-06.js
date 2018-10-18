function addContact({name, phone, email="이메일 없음", age=0}){
	console.log("이름 : "+ name);
	console.log("번호 : "+ phone);
	console.log("메일 : "+ email);
	console.log("나이 : "+ age);
}
addContact({
	name:"이몽룡",
	phone:"010-3434-8989"
})