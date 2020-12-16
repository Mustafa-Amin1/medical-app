import Dashboard from "./dashboard.vue";
import Appointments from "../dashboard/managements/appointments/appointments.vue";

import Patients from "../dashboard/managements/patients/patients.vue";
import PatientsList from "../dashboard/managements/patients/patient-list/patient-list.vue";
import newPatient from "../dashboard/managements/patients/new-patient/new-patient.vue";

import Doctors from "../dashboard/managements/doctors/doctors.vue";
import DoctorsList from "../dashboard/managements/doctors/doctor-list/doctor-list.vue"
import NewDoctor from "../dashboard/managements/doctors/new-doctor/new-doctor.vue"

import Users from "../dashboard/managements/users/manage-users/manage-users.vue";
const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Home",
        component: Dashboard,
    },
            {
                path: "/dashboard/appointments",
                name: "Appointments",
                component: Appointments
            },
            {
                path: "/dashboard/doctors",
                name: "Doctors",
                component: Doctors,
                children:[
                    {
                        path: "/dashboard/doctor-list",
                        name: "DoctorsList",
                        component: DoctorsList,
                    },
                    {
                        path: "/dashboard/new-doctor",
                        name: "NewDoctor",
                        component: NewDoctor,
                    }
                ]
            },
            {
                path: "/dashboard/patients",
                name: "Patients",
                component: Patients,
                children: [
                    {
                        path: "/dashboard/patient-list",
                        name: "PatientsList",
                        component: PatientsList,
                    },
                    {
                        path: "/dashboard/new-patient",
                        name: "newPatient",
                        component: newPatient,
                    },
                    {
                        path: "/dashboard/edit-patient",
                        name: "editPatient",
                        component: newPatient,
                    },
                    {
                        path: "/dashboard/view-patient",
                        name: "viewPatient",
                        component: newPatient,
                    }
                ]
            },
            {
                path: "/dashboard/admin/users",
                name: "Users",
                component: Users
            }
 
        
        
]

export default dashboardRoutes;