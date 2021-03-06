

import "../../../../../app/shared/components/forms/formValidate.js";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
// import { mapState } from 'vuex'

import $ from 'jquery';
export default {
    data() {
        return {
            // date: null,
            CPGId:null,
            isViewMode:null,
            PateintInfo:null,
            datepicker: false,
            displayNone: '',
            form: {
                patientName: {
                    en: {
                        Fname: "",
                        Sname: "",
                        Thname: "",
                        Lname: ""
                    },
                    ar: {
                        Fname: "",
                        Sname: "",
                        Thname: "",
                        Lname: ""
                    }
                },

                genderSelected: "",
                maritalSelected: "",
                date: {
                    year: "",
                    month: "",
                    day: "",
                    datePickerValue: "",
                    birthEstimate: {
                        estimatedYear: "",
                        estimatedMonth: ""
                    }
                },
                religionSelected: ""
            },
            birthEstimateCheck: [],
            dateInputsRequired: true,
            value: ""
        };
    },
    props: {
        objData: {},
        // windowClosed: null
        // isViewMode:false
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate().then(success => {
                if (!success) {
                    return;
                }
                var obj = JSON.stringify(this.form);
                console.log(obj);
                this.$store.commit('UpdateCPG', {  CPG: obj  });
                // Resetting Values
                // this.resetForm();
                // this.form.email = this.form.name = this.form.password = this.form.confirmation = "";
                // this.form.birthEstimateCheck = [];
                // this.form.gender = null;
                this.show = false;
            });
            this.$router.push({'name':'PatientsList'})
        },
        resetForm() {
            this.form.patientName.en.Fname = "";
            this.form.patientName.en.Sname = "";
            this.form.patientName.en.Thname = "";
            this.form.patientName.en.Lname = "";
            this.form.patientName.ar.Fname = "";
            this.form.patientName.ar.Sname = "";
            this.form.patientName.ar.Thname = "";
            this.form.patientName.ar.Lname = "";
            this.form.genderSelected = "";
            this.form.maritalSelected = "";
            this.form.date.month = "";
            this.form.date.day = "";
            this.form.date.year = "";
            this.form.date.datePickerValue = "";
            this.form.date.birthEstimate.estimatedYear = "";
            this.form.date.birthEstimate.estimatedMonth = "";
            this.form.religionSelected = "";
            // this.$nextTick(() => {
                // this.$refs.observer.reset();
            // });
        },
        cancelForm() {
            this.$store.getters.getUpdatedCPG.isEditCPG = false
            this.$store.getters.getUpdatedCPG.CPG = null
            this.$router.push({ 'name': 'PatientsList' });
        },
        disabelEstimate() {
            let inputs = Array.from(
                document.getElementsByClassName("estimate-inputs")
            );
            for (let input of inputs) {
                input.setAttribute("disabled", "");
            }
            return;
        },
        passwordCheck: function () {
            if (
                this.form.password.length > 0 &&
                this.form.password.length <= 4
            ) {
                document.getElementById("pass-strength").style.color = "red ";
                return (this.passwordStrenght = "Weak Password");
            } else if (
                this.form.password.length > 4 &&
                this.form.password.length <= 6
            ) {
                document.getElementById("pass-strength").style.color =
                    "#c8c84b ";

                return (this.passwordStrenght = "Intermediate Password");
            } else if (this.form.password.length > 6) {
                document.getElementById("pass-strength").style.color = "green";

                return (this.passwordStrenght = "Strong Password");
            }
        },
        onContext: function (ctx) {
            // add picker value to inputs
            let datePicker = (this.selected = ctx.selectedYMD);
            let dateValues = datePicker.split("-");
            this.form.date.day = dateValues[2];
            this.form.date.year = dateValues[0];
            this.form.date.month = dateValues[1];
        }
    },
    computed: {
        // ...mapState(['isViewMode']),
    },
    watch: {
        //view mode
        objData(val) {
            console.log(val);
            this.form.patientName.en.Fname = val.Name;
            this.form.patientName.en.Sname = "";
            this.form.patientName.en.Thname = "";
            this.form.patientName.en.Lname = "";
            this.form.patientName.ar.Fname = "";
            this.form.patientName.ar.Sname = "";
            this.form.patientName.ar.Thname = "";
            this.form.patientName.ar.Lname = "";
            this.form.genderSelected = "";
            this.form.maritalSelected = "";
            this.form.date.month = "";
            this.form.date.day = "";
            this.form.date.year = "";
            this.form.date.datePickerValue = "";
            this.form.date.birthEstimate.estimatedYear = "";
            this.form.date.birthEstimate.estimatedMonth = "";
            this.form.religionSelected = "";
        },
        //birth estimate 
        birthEstimateCheck(newVal) {
            let dateInputs = Array.from(
                document.getElementsByClassName("dateInput")
            );
            let estimateInputs = Array.from(
                document.getElementsByClassName("estimate-inputs")
            );
            if (newVal.length === 0) {
                // enable required validation
                this.dateInputsRequired = true;
                this.form.date.birthEstimate.estimatedYear = "";
                this.form.date.birthEstimate.estimatedMonth = "";
                this.datepicker = false;
                for (let input of estimateInputs) {
                    input.setAttribute("disabled", "");
                    input.classList.remove("is-valid");
                    input.classList.remove("is-invalid");
                }
                for (let input of dateInputs) {
                    input.removeAttribute("disabled");
                }
            } else {
                // disable required validation
                this.dateInputsRequired = false;
                this.form.date.month = "";
                this.form.date.day = "";
                this.form.date.year = "";
                this.form.date.datePickerValue = "";
                this.datepicker = true;

                for (let input of dateInputs) {
                    input.setAttribute("disabled", "");
                    input.classList.remove("is-valid");
                    input.classList.remove("is-invalid");
                }
                for (let input1 of estimateInputs) {
                    input1.removeAttribute("disabled");
                }
            }
        },
        windowClosed(val) {
            
            if (val == true) {
                console.log(val)
                this.resetForm();
                let inputsValid = Array.from($('.is-valid'))
                let inputsInValid = Array.from($('.is-invalid'))
                if (inputsValid) {
                    for (let input of inputsValid) {
                        input.classList.remove("is-valid");
                    }
                }
                if (inputsInValid) {
                    for (let input of inputsInValid) {
                        input.classList.remove("is-invalid");
                    }
                }

                // console.log(inputsValid)
                // console.log(inputsInValid)
                // let inputs = Array.from($('.is-valid'))
                // console.log(inputs)
                // for(let input in inputs){
                //     if(input.classList.contains('is-valid') || input.classList.contains('is-invalid') ) {
                //         console.log(input)
                //         input.classList.remove("is-valid");
                //         input.classList.remove("is-invalid");
                //     }
                // }
                // console.log(inputs)
            }
        }
    },
    created: function () {
        if(this.$store.getters.getUpdatedCPG.isEditCPG == true || this.$store.getters.getUpdatedCPG.isViewMode == true ){
            this.isViewMode = this.$store.getters.getUpdatedCPG.isViewMode
            if(this.isViewMode == true){
                this.displayNone = 'none'
            }
            this.CPGId = this.$store.getters.getUpdatedCPG.CPGId
            this.PateintInfo = this.$store.getters.getUpdatedCPG.CPG
            //fill inputs
            this.form.patientName.en.Fname = this.PateintInfo.patientName.en.Fname;
            this.form.patientName.en.Sname = this.PateintInfo.patientName.en.Sname;
            this.form.patientName.en.Thname = this.PateintInfo.patientName.en.Thname;
            this.form.patientName.en.Lname = this.PateintInfo.patientName.en.Lname;
            this.form.patientName.ar.Fname = this.PateintInfo.patientName.ar.Fname;
            this.form.patientName.ar.Sname = this.PateintInfo.patientName.ar.Sname;
            this.form.patientName.ar.Thname = this.PateintInfo.patientName.ar.Thname;
            this.form.patientName.ar.Lname = this.PateintInfo.patientName.ar.Lname;
            this.form.genderSelected = this.PateintInfo.genderSelected;
            this.form.maritalSelected = this.PateintInfo.maritalSelected;
            this.form.religionSelected = this.PateintInfo.religionSelected;
            this.form.date.datePickerValue = this.PateintInfo.date.datePickerValue;
        }

    },
    components: {
        ValidationProvider,
        ValidationObserver
    }
};

// add rules
extend("required", {
    validate(value) {
        return {
            required: true,
            valid: ["", null, undefined].indexOf(value) === -1
        };
    },
    computesRequired: true
});