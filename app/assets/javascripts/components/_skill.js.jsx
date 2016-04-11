var Skill = React.createClass({

  getInitialState(){
    return { editable: false };
  },

  handleEdit() {
    if (this.state.editable) {
      var skill   = { id: this.props.skill.id,
                      name: this.refs.name.value,
                      details: this.refs.details.value,
                      level: this.props.skill.level };

      this.props.handleUpdate(skill);
    }
    this.setState({ editable: !this.state.editable });
  },

  onUpdate() {
    var id = this.props.skill.id;
    var name = this.props.skill.name;
    var details = this.props.skill.details;
    var level = this.props.skill.level;

    return {id: id, name: name, details: details, level: level};

  },

  render() {
    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.skill.name} />
                                   : <h3>{this.props.skill.name}</h3>

    var details = this.state.editable ? <textarea type='text' ref='details' defaultValue={this.props.skill.details}></textarea>
                                      : <p>{this.props.skill.details}</p>

    return (
      <div>
        {name}
        {details}
        
        <button onClick={this.props.handleDelete}>Delete</button>

        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
      </div>
    );
  }
});
