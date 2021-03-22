import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const withLoadingDelay = (WrappedComponent) => {
  return props => {
    const [loaded, setLoad] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setLoad(true), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      loaded ? <div className={classNames('card', { 'card_is_red': props.card.chooseСardFlag })}>
        <WrappedComponent {...props} /></div> : <div className='card preloader'><div className='loader'>Loading...</div></div>
    )
  }
};

export default withLoadingDelay;