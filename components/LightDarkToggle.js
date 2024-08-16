'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const LightDarkToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div>
            <button 
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                style={{ 
                    cursor: 'pointer',
                    border: 'none',
                    background: 'none', 
                    color: theme === 'light' ? 'white' : 'black',
                }}
            >
                {theme === 'light' ? 'Light mode' : 'Dark mode'}
            </button>
		</div>
	);
};

export default LightDarkToggle;