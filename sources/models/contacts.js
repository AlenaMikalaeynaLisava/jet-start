const contacts1 = [
	{"id":1,"Name":"Alex Wanny","Email":"alex@gmail.com","Status":1,"Country":2},
	{"id":2,"Name":"Doris Wan","Email":"doris@gmail.com","Status":1,"Country":3}
];
export const contacts = new webix.DataCollection({
	data:webix.copy(contacts1)
  });