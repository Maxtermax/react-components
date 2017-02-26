import '../../scss/dashboard/dashboard.scss';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../components/Input.jsx';
import Layout from '../components/Layout.jsx';
import FormSearch from '../components/FormSearch.jsx';
import Title from '../components/Title.jsx';
import CheckGroup from '../components/CheckGroup.jsx';
import AsideList from '../components/AsideList.jsx';
import Event from '../components/Event.jsx';
import Button from '../components/Button.jsx';
import PopUp from '../components/PopUp.jsx';

const data = [
  {
    name: 'QUIBDO_JS',
    id: 1,
    startAt: '2017-02-17',
    location: 'Camara de Comercio',
    description:`
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Optio sunt, error eius temporibus,
      voluptate illo consectetur dicta mollitia perferendis dolores repellendus numquam?
      Rem dolor autem earum vitae numquam natus similique.
    `
  }
]


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.childrens = {};
    this.state = {
      showConfirm: true,
      showError: false
    }
  }

  pattern(candidate) {
    return !(new RegExp(/(\W)/g).test(candidate));
  }

  patternLocation(candidate) {
    return !(new RegExp(/[^A-Za-z0-9_-\s#]/g).test(candidate));
  }

  addChildren(name, child) {
    this.childrens[name] = child;
  }

  search(e) {
    e.preventDefault();
   console.log('this', this);
  }

  close() {
    window.modalConfirm.close();
  }

  request() {
    // let PopUpButtons = this;
    // if(PopUpButtons.state.loading === false && PopUpButtons.state.fail) {
    //   PopUpButtons.setFail();
    // } else {
    //   PopUpButtons.setLoading();
    // }
    // setTimeout(()=>{

    //   PopUpButtons.resetState();
    //   window.modalConfirm.close();
    // }, 2000);
  }

  requestMore() {
    console.log("request more")
  }

  deleteEvent(event, index) {
    window.modalConfirm.open();
    console.log('this', this);
  }

  confirm() {
    this.childrens.popUpForm.modal.close();
    this.childrens.confirmRemoveEvent.modal.close();
    this.childrens.popUpLoad.modal.open();
    setTimeout(()=> {
      this.childrens.popUpLoad.modal.close();
      this.childrens.popUpError.modal.open();
    }, 100000)
  }

  closePopUp() {
    this.childrens.confirmRemoveEvent.modal.close();
  }

  mark(self, alls) {
    console.log(self.props.name, 'self');
  }

  closeError() {
    this.childrens.popUpError.modal.close();
//    this.childrens.popUpWarning.modal.open();
  }

  closeWarning() {
    this.childrens.popUpWarning.modal.close();
    this.childrens.confirmRemoveEvent.modal.open();
  }

  fakeRequest(e) {
    e.preventDefault();
    //this.childrens.popUpForm.modal.close();
    this.childrens.confirmRemoveEvent.modal.open();
  }

  render() {
    let title= `Caracteres validos 'a-z' o 'A-Z', minimo 3, maximo 15, numeros 0-9, sin espacios.`;

    return (
      <section className="columns large-6 medium-12 small-12 section-feed">
        {
          /*
               <PopUp style="error" id="popUpError" data={"Se produjo un error :("} onClose={this.closeError.bind(this)} lift={this.addChildren.bind(this, "popUpError")} />
               <PopUp style="load" id="popUpLoad" lift={this.addChildren.bind(this, "popUpLoad")} />
               <PopUp style="warning" id="popUpWarning" onClose={this.closeWarning.bind(this)} lift={this.addChildren.bind(this, "popUpWarning")} />
          */
        }
        <div>
          <div className="large-centered form-search_container">
          <div className="container_events">
            <div id="event-wrapper" className="event">
              <FormSearch placeholder="Buscar Evento" validateMin={3} validateMax={15} title={title} lift={this.addChildren.bind(this, "formSearchEvent")} onSubmit={this.search.bind(this)} pattern={this.pattern.bind(this)} options={
                  [
                    <Input lift={this.addChildren.bind(this, "inputSearchByPlace")} type="date"/>,
                    <div className="aling-btn-and-input">
                      <Button style="btn-search" onClick={this.requestMore} type="submit"/>
                      <Input lift={this.addChildren.bind(this)} type="text" pattern={this.patternLocation.bind(this)} placeholder="Buscar por lugar" title={title}/>
                    </div>
                  ]
                } />
               <Event data={data} delete={this.deleteEvent.bind(this)} lift={this.addChildren.bind(this, "Event")}/>
            </div>{/* end event */}
            <Button style="btn-loadmore" onClick={this.requestMore} type="button" data="CARGAR MAS"/>
          </div>{/* end container_events */}
          </div> {/* end form-search_container */}
        </div>
      </section>
    )
  }
};

$(document).ready(()=> {
  ReactDOM.render(
    <Layout title={'DASHBOARD'} narrow={true} content={[
      <AsideList data={[
        <li>
          <a href="/event/add" target="_blank">
            <Button style="btn-add" icon={<i className="material-icons">&#xE02E;</i>} type="button" data="CREAR EVENTO"/>
          </a>
        </li>,
        <li>
          <a href="/event/add" target="_blank">
            <Button style="btn-list-add" icon={<i className="material-icons">&#xE03B;</i>} type="button" data="CREAR USUARIO"/>
          </a>
        </li>,
        <li>
          <a href="/user/list" target="_blank">
            <Button style="btn-list" type="button" icon={<i className="material-icons">&#xE896;</i>} data="USUARIOS"/>
          </a>
        </li>
      ]}/>,
      <Dashboard/>
    ]}/>,
    document.getElementById('app')
  );
});
