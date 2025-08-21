import React from 'react'
import PropTypes from 'prop-types';

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes = '', // Valeur par défaut pour éviter "undefined"
}) => {

  const className = `btn btn-primary ${classes}`.trim();

  if (href) {
    return (
      <a href={href}
         target={target}
         className={className}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    ) 
  } else {
    return (
      <button className={className}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    )
  }
}

ButtonPrimary.propTypes = { 
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
}




const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes = '', // Valeur par défaut pour éviter "undefined"
}) => {

  const className = `btn btn-primary ${classes}`.trim();

  if (href) {
    return (
      <a href={href}
         target={target}
         className={className}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    ) 
  } else {
    return (
      <button className={className}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    )
  }
}

ButtonOutline.propTypes = { 
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
}

export {
  ButtonPrimary,
  ButtonOutline
}