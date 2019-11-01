import React from 'react';

export default function IssuuLogo({ inverted, block }) {
    const staticStyles = {
        position: 'relative',
        width: '100%',
        padding: '2rem',
        boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.2)',
    };
    const absoluteStyles = {
        position: 'absolute',
        top: '2rem',
        left: '2rem',
    };
    const styles = block ? {} : absoluteStyles;
    const icon = (
        <svg
            style={{
                display: 'block',
                width: '5vw',
                ...styles,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
        >
            <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 253.578h300V0H0z" />
                </clipPath>
            </defs>
            <g
                clipPath="url(#a)"
                transform="matrix(1.33333 0 0 -1.33333 0 338.104)"
                fill={inverted ? '#fff' : '#f36d5d'}
            >
                <path d="M48.231 193.389c-6.828.065-12.312 5.65-12.247 12.478.064 6.828 5.652 12.312 12.48 12.247 6.828-.064 12.312-5.652 12.248-12.48-.065-6.827-5.653-12.31-12.48-12.245m.345 36.778c-13.483.127-24.52-10.701-24.647-24.185-.127-13.483 10.702-24.518 24.187-24.646 13.484-.127 24.521 10.702 24.648 24.185.127 13.483-10.702 24.519-24.188 24.646" />
                <path d="M15.023 206.24c.175 18.404 15.237 33.183 33.64 33.01 18.406-.174 33.187-15.236 33.012-33.64-.173-18.401-15.236-33.181-33.64-33.008-18.404.175-33.185 15.237-33.012 33.638M48 253.575c-.076 0-.151-.003-.227-.003v.006H3.99a4.002 4.002 0 01-3.99-3.99v-44.012c0-26.51 21.49-47.998 48-47.998 26.512 0 48 21.489 48 47.998 0 26.51-21.488 48-48 48" />
            </g>
        </svg>
    );
    return block ? <div style={staticStyles}>{icon}</div> : icon;
};
