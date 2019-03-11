import React from 'react';
import {
    Form,
} from 'react-bootstrap';

export default ({
	field, // { name, value, onChange, onBlur }
	form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
	...props
}) => (
	<Form.Group controlId={field.name}>
		<Form.Label>{props.label}</Form.Label>
        <Form.Control
        	{...field}
        	{...props}
        />
    </Form.Group>
);
	// <div>
	// 	<input type="text" {...field} {...props} />
	// 	{touched[field.name] &&
	// 	errors[field.name] && <div className="error">{errors[field.name]}</div>}
	// </div>