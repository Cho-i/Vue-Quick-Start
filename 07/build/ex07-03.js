'use strict';

function addContact(name, mobile) {
	var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '����';
	var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '����';
	var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '����';

	var str = 'name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}';
	console.log(str);
}
addContact('ȫ�浿', '010-222-3331');
addContact('�̸���', '010-222-3331', '02-3422-9900', '�����');