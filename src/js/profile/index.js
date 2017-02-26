import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import '../../scss/user/profile.scss';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="columns large-centered container-form-info large-6">
        <form>
          <div className="name field">
            <div className="wrap-input_title">
              <i className="material-icons">&#xE851;</i>
              <span>Nombre</span>
            </div>
            <Input type="text" icon={false} placeholder="Completa esta campo" />
          </div>{/*field name*/}

          <div className="email field">
            <div className="wrap-input_title">
              <i className="material-icons">&#xE0BE;</i>
              <span>Correo electronico</span>
            </div>
            <Input type="email" icon={false} placeholder="Completa esta campo" />
          </div>{/*field email*/}


          <div className="password field">
            <div className="wrap-input_title">
              <i className="material-icons">&#xE90D;</i>
              <span>Contraseña</span>
            </div>
            <Input type="password" icon={false} placeholder="Completa esta campo" />
          </div>{/*field password*/}

          <div className="password field">
            <div className="wrap-input_title">
              <i className="material-icons">&#xE90D;</i>
              <span>Confirmar contraseña</span>
            </div>
            <Input type="password" icon={false} placeholder="Completa esta campo" />
          </div>{/*field password*/}

          <div className="field">
            <Button type="submit" data="ENVIAR" style="btn-confirm" />
          </div>
        </form>

      </div>
    )
  }
}

$(document).ready(()=> {
  ReactDOM.render(
    <Layout title={'INFORMACION'} narrow={true} content={[
      <Profile/>
    ]}/>,
    document.getElementById('app')
  );
});
