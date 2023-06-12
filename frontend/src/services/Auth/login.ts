import axios from 'axios';

const APIURL='http://localhost:3001/auth/login';

export const LoginService= async(email:string,password:string)=>{
    return new Promise(async (resolve, reject) => {
        await axios.post(APIURL, {
            "email": email,
            "password": password
        }, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*"
            }
        }).then((res) => {
            console.log(res)
            if (res.status == 200) {
                    resolve(res)
            }
            else { reject("false") }
        }).catch((err) => { reject(err) })
       
    })
}