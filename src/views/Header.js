import React from 'react';
import fetch from 'node-fetch';

import cookie from '../utils/cookie';

const apiBase = 'https://localhost:44345';

class Header extends React.Component {
  constructor() {
    super();

    this.renderDiscordElement = this.renderDiscordElement.bind(this);
    this.fetchUser = this.fetchUser.bind(this);

    this.state = {
      discordUrl:
        'https://discordapp.com/api/oauth2/authorize?client_id=585893468166029539&redirect_uri=https%3A%2F%2Flocalhost%3A44345%2Fauth&response_type=code&scope=identify',
      user: {}
    };

    this.fetchUser();
  }

  async fetchUser() {
    const authToken = cookie.getCookie('auth');
    if (!authToken) {
      return null;
    }

    const resp = await fetch(`${apiBase}/auth/me`, {
      headers: {
        Authorization: authToken
      }
    });

    if (resp.status !== 200) {
      return null;
    }

    const user = await resp.json();

    this.setState({
      user
    });
  }

  renderDiscordElement() {
    const { user } = this.state;
    const { id, nametag } = user;

    if (id) {
      return <div>{nametag}</div>;
    }

    const { discordUrl } = this.state;
    return <a href={discordUrl}>Login with discord</a>;
  }

  render() {
    return <div>{this.renderDiscordElement()}</div>;
  }
}

export default Header;
