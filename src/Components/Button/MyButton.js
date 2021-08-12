// Button Component

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';

const MyButton = ({
    children, onClick, className, disabled, active, invert, getId, ...atrs
}) => {

    const onClickAction = e =>{
        if(disabled){
            e.preventDefault();
        } else{
            return onClick(e);
        }
    }

    const getIdAction = e => {
        if(disabled){
            e.preventDefault();
        } else{
            return getId(e);
        }
    }

    const classes = classNames(
        'btn',
        className,
        { active },
        {invert},
    );

    const Tag = atrs.href ? 'a': 'button';

    return(
        <Tag
            {...atrs}
            className={classes}
            disabled={disabled}
            onClick={onClickAction}
            getId={getIdAction}
        >
            {children}
        </Tag>
    );
};

MyButton.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    getId: () => {},
    className: '',
    disabled: false,
    active: false,

};

MyButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    getId: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
};

export default MyButton;