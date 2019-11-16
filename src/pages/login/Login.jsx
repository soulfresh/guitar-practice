import React from 'react';
import PropTypes from 'prop-types';

import './Login.scss';

export function Login({
  onSubmit,
}) {
  return (
    <div className="login-page" data-test="loginPage">
    </div>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default function Connected(props) {
  // const [, setFailed] = useState(false);

  const onSubmit = (username, password) => {
    // if (!valid) {
    //   setFailed(true);
    // }
  };

  return <Login {...props} onSubmit={onSubmit} />;
}

Connected.propTypes = {
  onSuccess: PropTypes.func.isRequired,
}

