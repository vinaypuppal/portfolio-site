import React from 'react';
import PropTypes from 'prop-types';

/**
 * Takes {typeA: ComponentA, typeB: ComponentB, ...} object and returns react component, that renders component of corresponding type, directly passing all props to it
 * @param {Object} components
 * @param {object} options
 * @param {object} options.typeProp
 * @param {object} options.defaultType
 * @param {object} options.displayName
 */

function componentTypes(components, options = {}) {
  const {
    typeProp = 'type',
    defaultType = 'default',
    displayName = 'ComponentType',
  } = options;

  const Component = props => {
    const type = props[typeProp] || defaultType;
    const Type = components[type] || components[defaultType];
    Component.propTypes = {
      [typeProp]: PropTypes.string,
      ...Type.propTypes,
    };
    Component.defaultProps = {
      [typeProp]: 'type',
      ...Type.defaultProps,
    };
    return <Type {...props} />;
  };

  Component.displayName = displayName;

  return Component;
}

export default componentTypes;
