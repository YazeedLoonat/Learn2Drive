import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';

const Action = ({
	variant,
	onClick,
	label,
	name,
	disabled
}) => {
	const handleClick = useCallback(() => {
		onClick(name);
	}, [name, onClick]);
	return <Button variant={variant} onClick={handleClick} disabled={disabled}>
		{label}
	</Button>;
};

export default Action;