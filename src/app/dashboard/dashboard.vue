<template>
  <div id="dashboard" class="my-5">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="database-item col-lg-3 col-sm-6 px-5 my-2">
          <router-link to="/dashboard/appointments">
            <div class="row align-items-center datavase-item__row">
              <div class="col-md-3">
                <!-- <i class="fas fa-user-md"></i> -->
                <img
                  src="../../assets/flat-icons/dashboard/appointments.svg"
                  alt="appointments"
                  class="img-fluid"
                />
              </div>
              <div class="col-md-9">
                <div class="row">
                  <span class="col-12">Appointments</span>
                  <span class="col-12">213</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="database-item col-lg-3 col-sm-6 px-5 my-2">
          <router-link to="/dashboard/doctors">
            <div class="row align-items-center datavase-item__row">
              <div class="col-md-3">
                <img
                  src="../../assets/flat-icons/dashboard/doctor.svg"
                  alt="doctors"
                  class="img-fluid"
                />
              </div>
              <div class="col-md-9">
                <div class="row">
                  <span class="col-12">Doctors</span>
                  <span class="col-12">213</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="database-item col-lg-3 col-sm-6 px-5 my-2">
          <router-link to="/dashboard/patients">
            <div class="row align-items-center datavase-item__row">
              <div class="col-md-3">
                <img
                  src="../../assets/flat-icons/dashboard/patients.svg"
                  alt="patients"
                  class="img-fluid"
                />
              </div>
              <div class="col-md-9">
                <div class="row">
                  <span class="col-12">Patients</span>
                  <span class="col-12">213</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="database-item col-lg-3 col-sm-6 px-5 my-2">
          <router-link to="/dashboard/admin/users">
            <div class="row align-items-center datavase-item__row">
              <div class="col-md-3">
                <img
                  src="../../assets/flat-icons/dashboard/user.svg"
                  alt="appointments"
                  class="img-fluid"
                />
              </div>
              <div class="col-md-9">
                <div class="row">
                  <span class="col-12">Users</span>
                  <span class="col-12">213</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div id="patientsChart">
        <div class="container my-5">
          <h4>Clinic survey</h4>
          <canvas id="patients-chart" width="50" height="20"></canvas>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3">
          <h4>Patients Ages</h4>
          <canvas id="patientsAge-chart" width="70" height="50"></canvas>
        </div>
        <div class="col-md-3">
          <h4>Patients Gender</h4>
          <canvas id="patientsGender-chart" width="70" height="50"></canvas>
        </div>
        <div class="col-md-3">
          <h4>Departments Capacity</h4>
          <canvas id="DepartmentCapacity-chart" width="70" height="50"></canvas>

        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>
<script src="./dashboard.js"></script>


<style lang="scss" scoped>
.database-item {
  // border: 1px solid red;
  font-size: 1.5rem;
  text-align: center;

  .datavase-item__row{
  box-shadow: 0 5px 10px lightgrey;
  border-radius: 0.45rem;
  transition: 0.5s;
    &:hover {
    transform: scaleY(0.9);
  }
  }
  a {
    text-decoration: none;
  }
  i {
    font-size: 4rem;
  }

}
</style>