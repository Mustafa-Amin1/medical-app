<template>
      <div id="register" class="container m-md-auto mt-5 rounded">
    <div class="form-header">
      <h1>Sign Up</h1>
    </div>
    <ValidationObserver ref="form" v-slot="{ invalid, handleSubmit }">
      <b-form @submit.prevent="handleSubmit(onSubmit)">
        <div class="row">
          <b-form-group
            id="input-group-1"
            class="col-md-6 col-sm-12"
            label="Your Name:"
            label-for="input-1"
          >
            <ValidationProvider
              tag="div"
              name="name"
              rules="userName|required"
              v-slot="{ errors, valid }"
            >
              <b-form-input
                id="input-1"
                v-model.trim="form.name"
                placeholder="Enter name"
                :state="errors[0] ? false : (valid ? true : null)"

              ></b-form-input>
              <span id="input-error" class="input-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            class="col-md-6 col-sm-12"
            label="Email address:"
            label-for="input-2"
            description="We'll never share your email with anyone else."
          >
            <ValidationProvider
              tag="div"
              name="email"
              rules="EmailRegex|required"
              v-slot="{ errors, valid }"
            >
              <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                :state="errors[0] ? false : (valid ? true : null)"
              ></b-form-input>

              <span id="input-error" class="input-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            class="col-md-6 col-sm-12"
            label="Password"
            label-for="input-3"
          >
            <ValidationProvider
              tag="div"
              name="password"
              rules="required"
              v-slot="{ errors, valid }"
            >
              <b-form-input
                id="input-3"
                v-model="form.password"
                placeholder="Password"
                type="password"
                :state="errors[0] ? false : (valid ? true : null)"
              ></b-form-input>
              <span
                id="pass-strength"
                class="input-message"
                v-show="passwordStrenght"
              >
                {{ passwordCheck() }}</span
              >
              <span id="input-error" class="input-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </b-form-group>
          <b-form-group
            id="input-group-4"
            class="col-md-6 col-sm-12"
            label="Confirm password"
            label-for="input-4"
          >
            <ValidationProvider
              tag="div"
              name="confirm"
              rules="required|confirmed:@password"
              v-slot="{ errors, valid }"
            >
              <b-form-input
                id="input-4"
                v-model="form.confirmation"
                type="password"
                :state="errors[0] ? false : (valid ? true : null)"
              ></b-form-input>
              <span id="input-error" class="input-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </b-form-group>

          <b-form-group
            id="input-group-5"
            class="col-md-6 col-sm-12"
            label="Gender:"
            label-for="input-5"
          >
            <ValidationProvider
              tag="div"
              name="gender"
              rules="excluded:Select One, null "
            >
              <b-form-select
                id="input-5"
                v-model="form.gender"
                :options="gender"
                required
              ></b-form-select>
            </ValidationProvider>
          </b-form-group>

          <b-form-group id="input-group-6" class="col-md-6 col-sm-12">
            <ValidationProvider
              tag="div"
              name="terms"
              rules="checked"
              v-slot="{ errors}"
            >
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-6">
                <b-form-checkbox value="true"
                  >By creating an account, you agree to VueJs's Conditions of
                  Use and Privacy Notice.
                </b-form-checkbox>
              </b-form-checkbox-group>
              <span id="input-error" class="input-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </b-form-group>
        </div>

        <b-button type="submit" variant="primary" :disabled="invalid"
          >Submit</b-button
        >
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script src="./registration.js"></script>
<style lang="scss" scoped>
#register {
  width: auto;
  padding: 20px;
  border: 2px solid #17a2b8;
  margin: 20px;
  text-align: left;
  .form-header {
    width: 100%;
    margin-bottom: 30px;
    h1 {
      text-align: center;
      font-size: 30px;
    }
  }
  #input-group-6 {
    align-self: end;
  }
  #input-error {
    color: red !important;
  }
  .input-message {
    font-size: 80%;
    font-weight: 400;
  }
#pass-strength{
  .pass-weak {
      color: red ;
  }
    .pass-intermediate {
      color: #c8c84b;
  }
    .pass-strong {
      color: green;
  }
}

}
</style>