import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import {countries} from "models/countries";
import {statuses} from "models/statuses";

const getData = id => {
	if (id) return contacts.getItem(id);
	return contacts;
  }
export default class Form extends JetView {
	config(){
		return {
			view:"form",
			width:300,
			elements:[
				{ view:"text", type:"text", label:"Name", name:"Name"},
				{ view:"text", label:"Email", name:"Email"},
				{ view:"combo", id:"field_statuses", label:"Status", name:"Status", options:statuses,  },
				{ view:"combo", id:"field_countries", label:"Country", name:"Country",  options:countries},
				{ margin:5, cols:[
					// {view:"button", value:"Add", click:() => {
					// 	const data = this.getRoot().getValues();
					// this.app.callEvent("onDataEditStop", [data]);
					// }},
					{ view:"button", value:"Ubdate", click:() => {
							const data = this.getRoot().getValues();
							console.log(this);
						this.app.callEvent("onDataEditStop", [data]);
						} , css:"webix_primary"},
					//{ view:"button", value:"Cancel"}
				]
				}
			] 
		};
	};
	urlChange(view){
		const id = this.getParam("id");
		if (id)
		  view.setValues(getData(id));
	  }
}