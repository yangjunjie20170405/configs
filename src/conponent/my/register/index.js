import React,{Component} from 'react';import './index.less';export default class Register extends Component{    constructor(){        super();        this.state={username:'',password:''};    }    btns=()=>{        window.location.href='http://localhost:8080/#/my/sigins'    }    btn=()=>{        let username=this.state.username;        let password=this.state.password;        let usernames=localStorage.getItem('sigin')        usernames=JSON.parse(usernames)        if(username.length>=6&&password.length>=6){            if(usernames){                if(usernames.find(item=>item.username===username)){                    alert('帐号被注册过了 请重新换帐号注册')                }else{                   usernames.push({username,password});                    usernames=JSON.stringify(usernames);                    localStorage.setItem('sigin',usernames)                    localStorage.setItem('sigins',username);                    window.location.href='http://localhost:8080/#/my'                }            }else{                let str=JSON.stringify([{username,password}]);                localStorage.setItem('sigin',str);                localStorage.setItem('sigins',username);                window.location.href='http://localhost:8080/#/my'            }        }else{            alert('帐号密码注册必须大于6位数')        }}    render(){        return (            <div className="sigins">                <div className="sigin">                    <li>                        <i className="iconfont icon-unie610">                        </i>                        <input                            placeholder="请输入你的用户名"                            className="iphone"                            type="text"                            id="iphone"                            value={this.state.username}                            onChange={event=>this.setState({username:event.target.value})}/></li>                    <li>                        <i className="iconfont icon-password">                        </i>                        <input                            placeholder="请输入你的密码"                            type="password"                            id="password"                            value={this.state.password}                            onChange={event=>this.setState({password:event.target.value})} />                    </li>                    <li><button onClick={this.btns}>前往登录</button></li>                    <li><button onClick={this.btn}>注册</button></li>                </div>            </div>        )    }}