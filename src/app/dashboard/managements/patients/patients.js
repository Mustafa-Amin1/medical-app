import { DataSource } from '@progress/kendo-datasource-vue-wrapper';
import { AutoComplete } from '@progress/kendo-dropdowns-vue-wrapper';

// import axios from "axios"; 

export default {
	name: 'App',
	components: {
		'autocomplete': AutoComplete,
		'datasource': DataSource
	},methods: {

	},
	mounted: function () {
		// axios.get('https://10.24.100.240:44351/odata/students').then(response => console.log(response.data));
	}
}