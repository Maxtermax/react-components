import '../../scss/user/list.scss';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout.jsx';
import FormSearch from '../components/FormSearch.jsx';
import Button from '../components/Button.jsx';
import UserInfo from '../components/UserInfo.jsx';


export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.childrens = [];
  }

  pattern(candidate) {
    return !(new RegExp(/(\W)/g).test(candidate));
  }

  addChildren(child) {
    this.childrens.push(child);
  }

  search(e) {
    e.preventDefault();
   console.log('this', this);
  }

  request() {

  }

  render() {
    let title= `
      Debes escribir como minimo 3 caracteres y maximo 15,
      solo se permiten caracteres de la 'a' hasta la 'z',
      numeros del 0 al 9, sin espacios.
    `;
    return (
      <div className="row wrap-content">
        <div className="columns large-8 medium-12 small-12 large-centered">
          <section className="section-content">
            <FormSearch options={[]} validateMin={3} validateMax={15} placeholder="Buscar Usuario" title={title} lift={this.addChildren.bind(this)} onSubmit={this.search.bind(this)} pattern={this.pattern.bind(this)} />
          </section>
          <section>
            <UserInfo/>
          </section>
          <Button style="btn-loadmore" type="button" data="CARGAR MAS"/>
        </div>
      </div>
    )
  }
};//end UserList

$(document).ready(()=> {
  ReactDOM.render(
    <Layout title={'LISTADO DE USUARIOS'} narrow={true} content={[
      <UserList/>
    ]}/>,
    document.getElementById('app')
  );
});
