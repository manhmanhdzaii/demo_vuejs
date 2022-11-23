import axiosInstances from "@/repository/axios";
const name = 'orders';
const Orders = {
 get: function() {
   return axiosInstances.get(name);
 },
};

export default Orders;