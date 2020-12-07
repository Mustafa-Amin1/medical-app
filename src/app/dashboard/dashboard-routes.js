import Dashboard from "./dashboard.vue";
import Appointments from "../dashboard/managements/appointments/appointments.vue";
import Doctors from "../dashboard/managements/doctors/doctors.vue";
import Patients from "../dashboard/managements/patients/patients.vue";
import Users from "../dashboard/managements/users/admin/manage-users/manage-users.vue";

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
                component: Doctors
            },
            {
                path: "/dashboard/patients",
                name: "Patients",
                component: Patients
            },
            {
                path: "/dashboard/admin/users",
                name: "Users",
                component: Users
            }
        
        
]

export default dashboardRoutes;