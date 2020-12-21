import axios from 'axios';

axios.get("http://185.161.95.77:33733/api/drugs?limit=1&page=1")
.then((r)=>{
    console.log(r.data);
    console.log(r.status);
    console.log(r.statusText);
    console.log(r.headers);
    console.log(r.config);
})