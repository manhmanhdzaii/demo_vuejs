import axiosInstances from "@/repository/axios";
const name = 'categories';
const Categories = {
 get: function() {
   return axiosInstances.get(name);
 },
};

export default Categories;