import signin from '../views/Signin.js';
import init from './firestore.js';

function login(){
init.init;
//signinwithpopup.func
var userid=signin.func1();
var token,user=signin.func2();
alert('func1,userid is'+userid);
alert('func2,token is'+String(token));
alert('func2,user is'+String(user));
}

function adddb(){
    var token,users=adddb.methods.gettoken();
    if(token!==undefined){
    alert('aaaaa');
    adddb.methods.adddb(token,users);
    }else{ 
    alert('bbbbb');
    }
}

export default {login,adddb};
    
