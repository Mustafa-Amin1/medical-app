import  axios  from "axios" ;
import "../formValidate";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        confirmation: "",
        gender: null,
        checked: [],
      },
      gender: [{ text: "Select One", value: null }, "Male", "Female"],
      show: true,
      passwordStrenght: "",
      value: "",
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }
        var obj = this.form;
        axios.post('http://localhost:3000/users', obj)
        .then(function (response) {
          console.log(response);
          alert("user data has been sent successfully and data is :" +response.data )
        })
        .catch(function (error) {
          alert("can't post user data error is" + error)
        });
        // Resetting Values
        this.form.email = this.form.name = this.form.password = this.form.confirmation = "";
        this.form.checked = [];
        this.form.gender = null;
        this.show = false;
      });
    },
    passwordCheck: function () {
      if (this.form.password.length > 0 && this.form.password.length <= 4) {
        document.getElementById("pass-strength").style.color = "red ";
        return (this.passwordStrenght = "Weak Password");
      } else if (
        this.form.password.length > 4 &&
        this.form.password.length <= 6
      ) {
        document.getElementById("pass-strength").style.color = "#c8c84b ";

        return (this.passwordStrenght = "Intermediate Password");
      } else if (this.form.password.length > 6) {
        document.getElementById("pass-strength").style.color = "green";

        return (this.passwordStrenght = "Strong Password");
      }
    },
  },
  computed: {},
  components: {
    ValidationProvider,
    ValidationObserver,
  },
};