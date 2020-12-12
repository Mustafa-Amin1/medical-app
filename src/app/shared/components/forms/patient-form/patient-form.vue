<template>
  <div id="patient-form-popoup">
    <div class="container-fluid">
      <!-- <div class="form-header text-center">
        <h2>Patient Registeration</h2>
      </div> -->
      <div class="form">
        <ValidationObserver ref="form" v-slot="{ invalid, handleSubmit }">
          <b-form @submit.prevent="handleSubmit(onSubmit)">
            <div class="container">
              <div class="form-buttons mt-1 mb-3 rounded">
                <div class="row justify-content-around">
                  <b-button
                    type="submit"
                    class="col-3"
                    variant="primary"
                    :disabled="invalid"
                    >Save</b-button
                  >
                  <b-button class="col-3" variant="primary" @click="resetForm"
                    >Clear</b-button
                  >
                  <b-button class="col-3" variant="primary">Cancel</b-button>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <!-- First row  -->
              <b-form-group
                id="input-group-1"
                class="col-sm-12 input-label mb-3"
              >
                <label for="en-Name">Patient English Name:</label>
                <div class="container-fluid">
                  <div id="en-Name">
                    <div class="row justify-content-between">
                      <ValidationProvider
                        tag="div"
                        name="First Name"
                        rules="isEnglish|required|userName"
                        v-slot="{ errors, valid }"
                        class="col-md-3 col-sm-6 name-inputs"
                      >
                        <b-form-input
                          v-model.trim="form.patientName.en.Fname"
                          placeholder="First Name"
                          :state="errors[0] ? false : valid ? true : null"
                        ></b-form-input>
                        <span id="input-error" class="input-message">{{
                          errors[0]
                        }}</span>
                      </ValidationProvider>

                      <ValidationProvider
                        tag="div"
                        name="Second Name"
                        rules="isEnglish|required|userName"
                        v-slot="{ errors, valid }"
                        class="col-md-3 col-sm-6 name-inputs"
                      >
                        <b-form-input
                          v-model.trim="form.patientName.en.Sname"
                          placeholder="Second Name"
                          :state="errors[0] ? false : valid ? true : null"
                        ></b-form-input>
                        <span id="input-error" class="input-message">{{
                          errors[0]
                        }}</span>
                      </ValidationProvider>

                      <ValidationProvider
                        tag="div"
                        name="Third Name"
                        rules="isEnglish|required|userName"
                        v-slot="{ errors, valid }"
                        class="col-md-3 col-sm-6 name-inputs"
                      >
                        <b-form-input
                          v-model.trim="form.patientName.en.Thname"
                          placeholder="Third Name"
                          :state="errors[0] ? false : valid ? true : null"
                        ></b-form-input>
                        <span id="input-error" class="input-message">{{
                          errors[0]
                        }}</span>
                      </ValidationProvider>
                      <ValidationProvider
                        tag="div"
                        name="Last Name"
                        rules="isEnglish|required|userName"
                        class="col-md-3 col-sm-6 name-inputs"
                        v-slot="{ errors, valid }"
                      >
                        <b-form-input
                          v-model.trim="form.patientName.en.Lname"
                          placeholder="Last Name"
                          :state="errors[0] ? false : valid ? true : null"
                        ></b-form-input>
                        <span id="input-error" class="input-message">{{
                          errors[0]
                        }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </b-form-group>

              <!-- Second row  -->
              <b-form-group id="input-group-2" class="col-sm-12 input-label">
                <label for="ar-Name">Patient Arabic Name:</label>
                <div class="container-fluid">
                  <div id="ar-Name">
                    <div class="row justify-content-between">
                      <ValidationProvider
                        tag="div"
                        name="الاسم الاول"
                        rules="isArabic|required|userName"
                        v-slot="{ errors, valid }"
                        class="col-md-3 col-sm-6 name-inputs"
                      >
                        <b-form-input
                          v-model.trim="form.patientName.ar.Fname"
                          placeholder="الاسم الاول"
                          :state="errors[0] ? false : valid ? true : null"
                        ></b-form-input>
                        <span id="input-error" class="input-message">{{
                          errors[0]
                        }}</span>
                      </ValidationProvider>

                      <ValidationProvider
                        tag="div"
                        name="الاسم الثاني"
                        rules="isArabic|required|userName"
                        v-slot="{ errors, valid }"
                        class="col-md-3 col-sm-6 name-inputs"
                      >
                        <b-form-input
                          v-model.trim="form.patientName.ar.Sname"
                          placeholder="الاسم الثاني"
                          :state="errors[0] ? false : valid ? true : null"
                        ></b-form-input>
                        <span id="input-error" class="input-message">{{
                          errors[0]
                        }}</span>
                      </ValidationProvider>

                      <ValidationProvider
                        tag="div"
                        name="الاسم الثالث"
                        rules="isArabic|required|userName"
                        v-slot="{ errors, valid }"
                        class="col-md-3 col-sm-6 name-inputs"
                      >
                        <b-form-input
                          v-model.trim="form.patientName.ar.Thname"
                          placeholder="الاسم الثالث"
                          :state="errors[0] ? false : valid ? true : null"
                        ></b-form-input>
                        <span id="input-error" class="input-message">{{
                          errors[0]
                        }}</span>
                      </ValidationProvider>

                      <ValidationProvider
                        tag="div"
                        name="الاسم الاخير"
                        rules="isArabic|required|userName"
                        v-slot="{ errors, valid }"
                        class="col-md-3 col-sm-6 name-inputs"
                      >
                        <b-form-input
                          v-model.trim="form.patientName.ar.Lname"
                          placeholder="الاسم الاخير"
                          :state="errors[0] ? false : valid ? true : null"
                        ></b-form-input>
                        <span id="input-error" class="input-message">{{
                          errors[0]
                        }}</span>
                      </ValidationProvider>
                    </div>
                    <div />
                  </div>
                </div>
              </b-form-group>

              <!-- Third row -->
              <b-form-group id="input-group-3" class="col-sm-12 input-label">
                <label for="gender">Gender:</label>

                <div class="container-fluid">
                  <ValidationProvider
                    id="gender"
                    tag="div"
                    name="gender"
                    v-slot="{ errors }"
                  >
                    <div class="row justify-content-around w-50">
                      <b-form-radio
                        required
                        class="col-md-3"
                        v-model="form.genderSelected"
                        name="some-radios"
                        value="Male"
                        >Male</b-form-radio
                      >
                      <b-form-radio
                        required
                        class="col-md-3"
                        v-model="form.genderSelected"
                        name="some-radios"
                        value="Female"
                        >Female</b-form-radio
                      >
                      <b-form-radio
                        required
                        class="col-md-3"
                        v-model="form.genderSelected"
                        name="some-radios"
                        value="Not specified"
                        >Not specified</b-form-radio
                      >
                    </div>
                    <span id="input-error" class="input-message">{{
                      errors[0]
                    }}</span>
                  </ValidationProvider>
                </div>
              </b-form-group>

              <!-- Fourth row -->
              <b-form-group id="input-group-4" class="col-sm-12 label">
                <label for="Marital">Marital Status :</label>
                <div class="container-fluid">
                  <ValidationProvider id="marital" tag="div" name="marital">
                    <div class="row justify-content-around w-50">
                      <b-form-radio
                        required
                        class="col-md-3"
                        v-model="form.maritalSelected"
                        name="marital"
                        value="Single"
                        >Single</b-form-radio
                      >
                      <b-form-radio
                        required
                        class="col-md-3"
                        v-model="form.maritalSelected"
                        name="marital"
                        value="Married"
                        >Married</b-form-radio
                      >
                      <b-form-radio
                        required
                        class="col-md-3"
                        v-model="form.maritalSelected"
                        name="marital"
                        value="None"
                        >None</b-form-radio
                      >
                    </div>
                  </ValidationProvider>
                </div>
              </b-form-group>

              <!-- Fifth row -->
              <b-form-group id="input-group-5" class="col-sm-12 label">
                <label>Date Of Birth :</label>
                <div class="container-fluid">
                  <div class="row justify-content-start w-50 mb-4 px-2">
                    <ValidationProvider
                      tag="div"
                      name="month"
                      class="col-md-3 mr-2 dateInput-wrapper"
                      :rules="{
                        positive: true,
                        required: dateInputsRequired,
                        min: { length: 2 },
                        max: { length: 2 },
                      }"
                      v-slot="{ errors, valid }"
                    >
                      <b-form-input
                        id="Dateinput-2"
                        class="dateInput"
                        v-model.number="form.date.month"
                        type="number"
                        placeholder="Month"
                        :state="errors[0] ? false : valid ? true : null"
                      ></b-form-input>
                      <span id="input-error" class="input-message">{{
                        errors[0]
                      }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      tag="div"
                      name="day"
                      class="col-md-3 mr-2 dateInput-wrapper"
                      :rules="{
                        positive: true,
                        required: dateInputsRequired,
                        min: { length: 2 },
                        max: { length: 2 },
                      }"
                      v-slot="{ errors, valid }"
                    >
                      <b-form-input
                        id="Dateinput-3"
                        class="dateInput"
                        v-model.number="form.date.day"
                        type="number"
                        placeholder="Day"
                        :state="errors[0] ? false : valid ? true : null"
                      ></b-form-input>

                      <span id="input-error" class="input-message">{{
                        errors[0]
                      }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      tag="div"
                      name="year"
                      class="col-md-3 mr-2 dateInput-wrapper"
                      :rules="{
                        positive: true,
                        required: dateInputsRequired,
                        min: { length: 4 },
                        max: { length: 4 },
                      }"
                      v-slot="{ errors, valid }"
                    >
                      <b-form-input
                        id="Dateinput-1"
                        class="dateInput"
                        v-model="form.date.year"
                        type="number"
                        placeholder="Year"
                        :state="errors[0] ? false : valid ? true : null"
                      ></b-form-input>

                      <span id="input-error" class="input-message">{{
                        errors[0]
                      }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                      tag="div"
                      name="datepicker"
                      class="col-md-2"
                    >
                      <b-input-group-append>
                        <b-form-datepicker
                          class="dateInput"
                          v-model="form.date.datePickerValue"
                          button-only
                          @context="onContext"
                          :disabled="datepicker"
                        ></b-form-datepicker>
                      </b-input-group-append>
                    </ValidationProvider>
                  </div>
                </div>
                <div class="estimated-section w-50">
                  <ValidationProvider
                    tag="div"
                    name="estimated-checkbox"
                    class="w-100 px-4 mb-2"
                  >
                    <!-- <b-form-checkbox-group id="checkboxes-6"> -->
                    <b-form-checkbox v-model="birthEstimateCheck" value="true"
                      >Estimated Age
                    </b-form-checkbox>
                    <!-- </b-form-checkbox-group> -->
                    <!-- <span id="input-error" class="input-message">{{
                        errors[0]
                      }}</span> -->
                  </ValidationProvider>
                  <div class="w-100 px-4">
                    <div class="container-fluid">
                      <div class="row justify-content-between">
                        <ValidationProvider
                          tag="div"
                          class="col-md-5 col-sm-6"
                          name="estimated-inputs"
                          :rules="{
                            positive: true,
                            required: !dateInputsRequired,
                            min: { length: 4 },
                            max: { length: 4 },
                          }"
                          v-slot="{ errors, valid }"
                        >
                          <b-form-input
                            class="estimate-inputs"
                            v-model.trim="form.date.birthEstimate.estimatedYear"
                            disabled
                            placeholder="Estimated Year"
                            type="number"
                            :state="errors[0] ? false : valid ? true : null"
                          ></b-form-input>
                          <span id="input-error" class="input-message">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                        <ValidationProvider
                          tag="div"
                          class="col-md-5 col-sm-6"
                          name="estimated-inputs"
                          :rules="{
                            positive: true,
                            required: !dateInputsRequired,
                            min: { length: 2 },
                            max: { length: 2 },
                          }"
                          v-slot="{ errors, valid }"
                        >
                          <b-form-input
                            class="estimate-inputs"
                            v-model.number="
                              form.date.birthEstimate.estimatedMonth
                            "
                            disabled
                            placeholder="Estimated Month"
                            type="number"
                            :state="errors[0] ? false : valid ? true : null"
                          ></b-form-input>
                          <span id="input-error" class="input-message">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                      </div>
                    </div>
                  </div>
                </div>
              </b-form-group>

              <!-- Sixth row -->
              <b-form-group id="input-group-4" class="col-sm-12 label">
                <label for="religion">Religion:</label>
                <div class="container-fluid">
                  <ValidationProvider id="religion" tag="div" name="religion">
                    <div class="row justify-content-around w-50">
                      <b-form-radio
                        required
                        class="col-md-3"
                        v-model="form.religionSelected"
                        name="religion"
                        value="Single"
                        >Muslim</b-form-radio
                      >
                      <b-form-radio
                        required
                        class="col-md-3"
                        v-model="form.religionSelected"
                        name="religion"
                        value="Married"
                        >Christian</b-form-radio
                      >
                      <b-form-radio
                        required
                        class="col-md-3"
                        v-model="form.religionSelected"
                        name="religion"
                        value="None"
                        >Others</b-form-radio
                      >
                    </div>
                  </ValidationProvider>
                </div>
              </b-form-group>
            </div>
          </b-form>
        </ValidationObserver>
      </div>
      <!-- <pre class="m-0">{{ form }}</pre> -->
    </div>
  </div>
</template>



<script src="./patient-form.js"></script>



<style lang="scss" scoped>

.name-inputs {
    max-width: 23%;
    padding: 0;
}
b-form-group {
    margin-bottom: 10px;
}
.input-group-append {
    margin-left: 40%;
    padding: 0;
}
label {
    font-weight: 500;
    font-size: 16px;
}
.estimated-section {
    background-color: #e8e8e8;
    padding-top: 30px;
    padding-bottom: 30px;
}
.form-buttons {
    background-color: lightblue;
    padding: 30px;
}
#input-error {
    color: red !important;
}
</style>