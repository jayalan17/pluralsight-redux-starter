import React from 'react';

class MainToo extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    );
  }
}

MainToo.propTypes = {params: React.PropTypes.object};

export default MainToo;
