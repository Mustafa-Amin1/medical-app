import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import "../../forms/formValidate";
export default {
    data() {
        return {
            // date: null,
            name: 'app-paitent-form-popup',
            components: {
                ValidationProvider,
                'app-observer':ValidationObserver
            },
            datepicker: false,
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
    methods: {
        onSubmit() {
            this.$refs.form.validate().then(success => {
                if (!success) {
                    return;
                }
                var obj = JSON.stringify(this.form);
                console.log(obj);
                // Resetting Values
                this.form.email = this.form.name = this.form.password = this.form.confirmation = "";
                this.form.birthEstimateCheck = [];
                this.form.gender = null;
                this.show = false;
            });
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
            this.$nextTick(() => {
                this.$refs.observer.reset();
            });
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

        passwordCheck: function() {
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
        onContext: function(ctx) {
            // add picker value to inputs
            let datePicker = (this.selected = ctx.selectedYMD);
            let dateValues = datePicker.split("-");
            this.form.date.day = dateValues[2];
            this.form.date.year = dateValues[0];
            this.form.date.month = dateValues[1];
        }
    },
    watch: {
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
        }
    },
    computed: {},

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