import axiosInstances from "@/repository/axios";
const name = 'cart_session';
const CartSession = {
 get: function(data) {
   return axiosInstances.post(name, data);
 },
 post: function(data) {
  return axiosInstances.post(name + '/checkout', data);
 }
};

export default CartSession;