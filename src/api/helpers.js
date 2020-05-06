import axios from 'axios';
const ERR_Ok = 0
export function get(url) {
    return function (params) {
        return axios.get(url, {
            params
        }).then((res) => {
            const { errno, data } = res.data
            if (errno === ERR_Ok) {
                return data
            }
        }).catch(() => {

        })
    }
}