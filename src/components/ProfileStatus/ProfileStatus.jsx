import React from 'react';
import { Input } from 'antd';
import './ProfileStatus.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.userStatus,
  }

  handleClick = () => {
    this.setState({editMode: true})
  }

  handleBlur = () => {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status)
  }

  handleChange = (e) => {
    this.setState({status: e.target.value})
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.userStatus !== this.props.userStatus) {
      this.setState({status: this.props.userStatus})
    }
  }

  render() {
    const { TextArea } = Input;
    return (
      <div className="status-input">
        {
          this.state.editMode ?
          <TextArea
            style={{ 'line-height': '1.35em' }}
            className="status-input__textarea" 
            rows={4} 
            onBlur={this.handleBlur}
            type="text" 
            value={this.state.status} 
            onChange={this.handleChange} /> : 
          <p className="status-input__result" onClick={this.handleClick}>{this.props.userStatus || ''}</p>  
        }
      </div>
    )
  }
}

export default ProfileStatus;