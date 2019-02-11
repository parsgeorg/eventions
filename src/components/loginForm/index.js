import React from 'react';

const LoginForm = props => (
  <form onSubmit={props.submit}>
    <div className="row" id="Body">
      <div className="medium-5 columns left">
        <label>Имя</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={props.changeUsername}
          value={props.username}
        />
        <label>Пароль</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={props.changePassword}
          value={props.password}
        />
        <button className="button success">Авторизоваться</button>

        {/* <a href="/signup">Регистрация</a> */}
      </div>
    </div>
  </form>
);

export default LoginForm;
