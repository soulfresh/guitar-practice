import PropTypes from 'prop-types';

export const PageDefinitionPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
});
