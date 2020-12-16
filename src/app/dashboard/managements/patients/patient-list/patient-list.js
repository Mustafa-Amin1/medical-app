import { noRecordTemplate, getTooltipTilte } from '../../../../../../src/app/shared/grid-functionality/grid-functionality.js';
import $ from 'jquery'
import { Tooltip } from '@progress/kendo-popups-vue-wrapper';
import ConfirmPopup from '@/app/shared/components/confirm-popup/confirm-popup.vue';
import { EventBus } from "@/app/shared/services/event-bus.js";
import { Notification } from '@progress/kendo-popups-vue-wrapper';
import { showPopupNotification } from '@/app/shared/grid-functionality/grid-functionality.js';
import deleteIcon from '../../../../../../../medical-system/src/assets/svg/delete.svg'
import editIcon from '../../../../../../../medical-system/src/assets/svg/edit.svg'
import veiwIcon from '../../../../../../../medical-system/src/assets/svg/view.svg'

export default {
	name: 'App',
	data() {
		return {
            isEditRow: false,
            hideNotification: 5000,
			CPGListDataSource: {  //// define grid's datasource
				data: json,
				// schema: {
				// 	model: {
				// 		id: "ID",  // must be unique
				// 		fields: {
				// 			fullName: { editable: false ,},  /// this column will NOT be editable
				// 			genderSelected : {},
				// 			maritalSelected: {},
				// 			religionSelected: {},
				// 			datePickerValue: {}
				// 		}
				// 	}
                // },
                sort: [
                    { field: 'ID', dir: 'asc' }
                ],
            },

			columns: [   ////  define columns
				{
                    title: 'ID',
                    field: "ID",
                    filterable: {
                        operators: { // redefine the string operators
                            string: {
                                contains: "Contains",
                            }
                        }
                    }
                },
				{
					title: 'Patient Name',
                    field: "patientName.en.fullName",   ///  filed must match name in DS
                    editable: false,
                    filterable: {
                        operators: { // redefine the string operators
                            string: {
                                contains: "Contains",
                            }
                        }
                    }
				},
				{
					title: 'Gender',
					field: "genderSelected",
					template: `<span> #:genderSelected# </span>`,   /// template if needed
				},
				{
					title: 'Marital Status',
					field: "maritalSelected",
				},
				{
					title: 'Religion',
					field: "religionSelected",
				},
				{
					title: 'joinedDate',
					field: "date.datePickerValue",
				},
				{
					title: 'Actions',
					command: [    /// action buttons
						{
							name: 'edit',
							click: this.clickEditRow,
							//visible: (dataItem) => { return dataItem.viewPerm },
							text: { edit: 'Common.Edit' },
							template: `<a role='button' class='k-button k-buttonicontext k-grid-edit mr1 ml-1'>  <img src='${editIcon}' /></a>`
						},
						{
							name: "showConfirmPopup",
							iconClass: 'fas fa-trash-alt',
							click: this.showConfirmPopup,
                            template: `<a role="button" class='k-grid-showConfirmPopup k-button k-buttonicontext k-grid-deleterow mrl mrl'> <img src='${deleteIcon}'/></a>`,
						},
						{
							name: "view",
							iconClass: 'fas fa-trash-alt',
							click: this.viewDetails,
                            template: `<a role="button" class=' k-button k-buttonicontext k-grid-view mrl mrl'> <img src='${veiwIcon}'/></a>`,
                            title:"hello"
						}
					]
				}
            ],
            confirmdata: [
                {
                    iconName: '',
                    confirmText: '',
                    confirmBtnBtnText: '',
                    cancelBtnText: '',
                    headerTitle: '',
                    messageText: '',
                    itemName: '',
                    id: '',
                    modifiedTs: ''
                }
            ],
            row:''
		}

	},
	components: {
		// 'autocomplete': AutoComplete,
		// 'datasource': DataSource
		'kendo-tooltip': Tooltip,
        ConfirmPopup,
        'kendo-notification':Notification,
	}, 
	methods: {
		noRecordTemplate,
		getTooltipTilte: e => getTooltipTilte(e),
		//add method
		clickAddRow: function () {
			this.$store.commit('UpdateCPG', { isViewMode: false, isEditCPG: false, CPGId: null, CPG: null  }); // store mode and item's id
			this.$router.push({ 'name': 'newPatient' })
		},
		//edit method
		clickEditRow: function (e) {
			let grid = $("#CPGListGrid").getKendoGrid();  //get grid
            let item = grid.dataItem(e.target.closest("tr"));  // get grid's dataitem
            console.log(item);
			this.$store.commit('UpdateCPG', { isViewMode: false, isEditCPG: true, CPGId: item.ID, CPG: item  }); // store mode and item's id
			this.$router.push({ 'name': 'editPatient' });
        },
        //delete method
        showPopupNotification,
         showConfirmPopup(e) {
            this._bv__modal.show('modal-scoped')
            this.confirmdata.iconName = 'text-danger fas fa-exclamation-triangle';
            this.confirmdata.headerTitle = 'Common.Alert';
            this.confirmdata.headerTitle = 'Common.Alert';
            this.confirmdata.confirmBtnText = 'Common.No';
            this.confirmdata.cancelBtnText = 'Common.Yes';
            this.confirmdata.messageText = 'Common.DeleteMsg';
            this.confirmdata.qmark = '?';
            //get row content
            let targetRow = e.currentTarget.closest("tr")
            this.row = targetRow

        },
        //view details
        viewDetails(e) {
            let grid = $("#CPGListGrid").getKendoGrid();  //get grid
            let item = grid.dataItem(e.target.closest("tr"));  // get grid's dataitem
			this.$store.commit('UpdateCPG', { isViewMode: true, isEditCPG: false, CPGId: item.ID, CPG: item  }); // store mode and item's id
			this.$router.push({ 'name': 'viewPatient' });
        }
    },
    mounted() {
        // delete confirmation
        EventBus.$on('confirmed-action', () => {
            this.row.remove()
            this.showPopupNotification('Success', 'Deleted Successfully', `success`)
        });

        this.popupNotificationWidget = this.$refs.popupNotificationSave.kendoWidget();
    },
    beforeDestroy() {
        //To fix refresh grid
        EventBus.$off("confirmed-action");
    }
}

const json = [

    {
        "ID" : 1,
        "patientName": {
            "en": {
                "fullName":"Mustafa Amin Hassan Abu El-Yazid",
                "Fname": "Mustafa",
                "Sname": "Amin",
                "Thname": "Hassan",
                "Lname": "AbuEl-Yazid"
            },
            "ar": {
                "fullName":"مصطفى امين حسن ابو اليزيد",
                "Fname": "مصطفى",
                "Sname": "امين",
                "Thname": "حسن",
                "Lname": "ابواليزيد"
            }
        },
    
        "genderSelected": "Male",
        "maritalSelected": "Single",
        "date": {
            "year": "",
            "month": "",
            "day": "",
            "datePickerValue": "2020-12-14",
            "birthEstimate": {
                "estimatedYear": "",
                "estimatedMonth": ""
            }
        },
        "religionSelected": "Muslim"

},
{
    "ID" : 2,
    "patientName": {
        "en": {
            "fullName":"Hasnaa Abd El-Hamed Mahmoud Abdo",
            "Fname": "Hasnaa",
            "Sname": "AbdEl-Hamed",
            "Thname": "Mahmoud",
            "Lname": "Abdo"
        },
        "ar": {
            "fullName":"حسناء عبد الحميد محمود عبدو",
            "Fname": "حسناء",
            "Sname": " عبدالحميد",
            "Thname": "محمود",
            "Lname": "عبدو"
        }
    },

    "genderSelected": "Female",
    "maritalSelected": "Married",
    "date": {
        "year": "",
        "month": "",
        "day": "",
        "datePickerValue": "2020-12-20",
        "birthEstimate": {
            "estimatedYear": "",
            "estimatedMonth": ""
        }
    },
    "religionSelected": "Muslim"


}

    // {
    //     "ID": 2,
    //     "enFullName":"Hasnaa Abd El-Hamed Mahmoud Abdo",
	// 	"enfirstName": "Hasnaa",
	// 	"ensecondName": "AbdEl-Hamed",
	// 	"enthirdName": "Mahmoud",
    //     "enfourthName": "Abdo",
    //     "arFullName":"حسناء عبد الحميد محمود عبدو",
    //     "arfirstName": "حسناء",
	// 	"arsecondName": "عبدالحميد",
	// 	"arthirdName": "محمود",
    //     "arfourthName": "عبدو",
    //     "Gender" : "Female",
	// 	"MaritalStatus": "Married",
    //     "Religion": "Muslim",
    //     "joinedDate": "2020-12-15"
    // },
    // {
    //     "ID": 1,
    //     "enFullName":"Mustafa Amin Hassan Abu El-Yazid",
	// 	"enfirstName": "Mustafa",
	// 	"ensecondName": "Amin",
	// 	"enthirdName": "Hassan",
    //     "enfourthName": "AbuEl-Yazid",
    //     "arFullName":"مصطفى امين حسن ابو اليزيد",
    //     "arfirstName": "مصطفى",
	// 	"arsecondName": "امين",
	// 	"arthirdName": "حسن",
    //     "arfourthName": "ابواليزيد",
    //     "Gender" : "Male",
	// 	"MaritalStatus": "Single",
    //     "Religion": "Muslim",
    //     "joinedDate": "2020-12-14"
    // },
	// {
	// 	"ID": 2,
	// 	"CPGName": "CPG asfcasfc Name",
	// 	"Specialty": "hjadgs hs",
	// 	"Diagnosis": "oiwdu oi",
	// 	"CreatedBy": "a shdsj",
	// 	"CreationDate": "akjsdh "
	// },
]