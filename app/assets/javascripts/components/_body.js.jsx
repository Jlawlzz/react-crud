var Body = React.createClass({

  getInitialState(){
    return { skills: [] };
  },

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  handleSubmit(skill) {
    var newState = this.state.skills.concat(skill);
    this.setState({skills:newState});
  },

  render(){
    return(
      <div>
        <div>
          <NewSkill handleSubmit={this.handleSubmit} />
        </div>
        <div>
          <AllSkills skills={this.state.skills} />
        </div>
      </div>
    );
  }
});
