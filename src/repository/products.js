import axiosInstances from "@/repository/axios";
const name = 'products';
const Products = {
    get: function (){
        return axiosInstances.get(name);
    },
    getById: function (id) {
        return axiosInstances.get(name + '/' + id);
    },
    getNumProducts: function(data){
        return axiosInstances.post(name+'/getNumProducts', data);
    },
    search: function(data){
        return axiosInstances.post(name+'/search', data);
    },
    page: function(page){
        return axiosInstances.get(name+'?page='+page);
    }

};

export default Products;