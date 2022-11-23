import axiosInstances from "@/repository/axios";
const name = 'register';
const Register = {
 post: function(data) {
   return axiosInstances.post(name,data);
 },
};

export default Register;