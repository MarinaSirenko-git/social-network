import React from 'react';
import { Input } from 'antd';
import './ProfileStatus.css';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      status: this.props.userStatus,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    this.setState({ editMode: true });
  }

  handleBlur() {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  }

  handleChange(e) {
    this.setState({ status: e.target.value });
  }

  handleKeyDown() {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.userStatus !== this.props.userStatus) {
  //     this.setState({ status: this.props.userStatus });
  //   }
  // }

  render() {
    const { TextArea } = Input;
    return (
      <div className="status-input">
        {
          this.state.editMode
            ? (
              <TextArea
                style={{ 'line-height': '1.35em' }}
                className="status-input__textarea"
                rows={4}
                onBlur={this.handleBlur}
                type="text"
                value={this.state.status}
                onChange={this.handleChange}
              />
            )
            : <div role="button" tabIndex={0} className="status-input__result" onKeyDown={this.handleKeyDown} onClick={this.handleClick}>{this.props.userStatus || ''}</div>
        }
      </div>
    );
  }
}

export default ProfileStatus;
