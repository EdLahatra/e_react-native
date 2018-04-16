import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

const Root = styled.View``;

const T = styled.Text``;

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterSearch: 'notApproved',
    };
  }
  render() {
    const { user } = this.props;
    return (
      <Root>
        <T>Profile {user.user && user.user.fullName ? user.user.fullName : ''}</T>
      </Root>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProfileScreen);
