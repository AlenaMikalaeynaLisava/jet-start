import {JetView} from "webix-jet";
import {contacts} from "models/contacts";
import Form from "views/form";

const getData = id => {
	if (id) return contacts.getItem(id);
	return contacts;
  }
  
export default class Contacts extends JetView {
	config(){
		return { 
			view:"layout",
			cols:[{
				view:"layout",
				rows:[
					{ view:"list",

					select:true,
					localId:"list",
						template:"#Name# #Email# #Status# #Country# <span class='webix_icon mdi mdi-close remove-icon' title='Remove'></span>",
						onClick:{
							"remove-icon":function(ev, id){
							  this.remove(id);
							}
						}
					},
					{view:"button", value:"Add", 
					// click:() => {
					// 	const data = {"id":3,"Name":"Al Wan","Email":"ax@gmail.com","Status":1,"Country":3};
					click:function(ev, id){
							let list =this.getParentView().queryView("list");
							const data = {"Name":"Al Wan","Email":"ax@gmail.com","Status":1,"Country":3};
							list.add(data);
							}
					}
				],
			},	
				Form
			]   
		};
	}
	init(view){
		let list = view.queryView("list");
		let button = view.queryView("button");
		// this.on(button, "add:list", (data) => {
		// 	console.log("Hm");
	    //     if(data){
        //             list.add(data);
		// 	}
	    // });
		
		list.parse(getData());
		this.on(list, "onAfterSelect", id => {
			this.show(`form?id=${id}`);
		  });
		  list.select(list.getFirstId());

		  this.on(this.app, "onDataEditStop", (data) => {
	        if(data){
                    list.updateItem(data.id, data);
	    }
	});
}
}