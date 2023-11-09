import Vue from 'vue';
class UserService {

  login(user) {
    
    return Vue.prototype.$http.post("/user/authenticate",
      {
        userName: user.name,
        password: user.password,
      },
    )
      .then((response) => {
        if (response.data.token) {
          var userToken = JSON.stringify(response.data);
          localStorage.setItem("user", userToken);
          Vue.prototype.$http.defaults.headers.common["Authorization"] = 'Bearer ' + response.data.token;
          Vue.prototype.$http.defaults.headers["Authorization"] = 'Bearer ' + response.data.token;
          
        }
        return response.data;
      });
  }

  SaveOrUpdate(user) {
    const form = new FormData();
    form.append('id', user.id);
    form.append('name',  user.name);
    form.append('username', user.username);
    form.append('password', user.password);
    form.append('role', user.role);
    form.append('rank', user.rank);
    form.append('department', user.department);
    form.append('status', user.status);
    
    return Vue.prototype.$http.post("/user/SaveOrUpdate", form);
  }

  InsertPassword(user) {
    return Vue.prototype.$http.post("/user/passwordreset",
      {
        Id: user.id,
        UserName: user.username,
        Password: user.password,
        Role: user.role,

      });
  }

  GetById(id)
  {
      return Vue.prototype.$http.get('/user/GetById?id='+id);
  }

  Delete(id)
  {
   return Vue.prototype.$http.delete('/user/Delete?id='+ id);
  }


  GetAll(params, search) {
    let config={          
      params: { ...params, ...search }
    };
    return Vue.prototype.$http.get('/User/GetAll', config);
  }

  ResetPassword(user) {
      return Vue.prototype.$http.post('/user/ResetPassword', {
          id: user.id,
          password: user.password,
          confirm_password: user.confirm_password,
      })
  }

  ExportExcel(params, search){
    let config={          
      params: { ...params, ...search },
      responseType: 'blob'
    };
    return Vue.prototype.$http.get('/User/ExportExcel', config);
  }

  GetLogInUserInfo()
  {
      return Vue.prototype.$http.get('/user/GetLogInUserInfo');
  }
}

export default new UserService();