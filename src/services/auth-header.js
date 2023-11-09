export default function authHeader(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    let hh = String(today.getHours()).padStart(2, '0');
    let minute = String(today.getMinutes()).padStart(2, '0');
    let sec = String(today.getSeconds()).padStart(2, '0');

    let dtStr = yyyy + mm + dd + hh + minute + sec;

    let user=JSON.parse(localStorage.getItem('user'));
    
    if(user && user.token){
        if(user.apiCallJwtExpire >= dtStr){

            
            return {

                Authorization:'Bearer '+user.token
            }
        }else{
            //router.push('/login')
        }           
    }
    else
    {
        return{};
    }

    }