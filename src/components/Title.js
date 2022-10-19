import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="title">{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
// Resolvi o erro do linter através da doc abaixo
// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md

export default Title;
