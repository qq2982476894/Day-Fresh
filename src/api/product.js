import axios from "@/axios";

// 获取表格数据
export default{
    list(params){
        return axios.get('/products/all',{params})
    },
    remove(params){
        return axios.delete('/products/'+params.id)
    }
}