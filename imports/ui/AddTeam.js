import React from 'react';
import PropTypes from 'prop-types';
import {Teams} from './../api/teams';


export default class AddTeam extends React.Component {
  handleSubmit(e) {
    let teamName = e.target.teamName.value;
    e.preventDefault();
    if (teamName) {
      Teams.insert({
        name: teamName,
        score: 0
      });
      e.target.teamName.value = '';
    }
  }
  render() {
    return (
      <div className = 'list-item'>
        <form className = 'form' onSubmit= { this.handleSubmit.bind(this) }>
          <input className = 'form__input' type = 'text' name = 'teamName' placeholder = "Team Name"/>
          <button className = 'button'>Add Team</button>
        </form>
      </div>
    );
  }

}
