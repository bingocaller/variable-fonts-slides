import React, { useEffect, useState } from 'react';

function VariableHeadline({ uppercase, children, style, ...props }) {
    const [fontWeight, setFontWeight] = useState(900);
    const [countingUp, setCountingUp] = useState(true)
    useEffect(() => {
        const updateFontWeightTimeout = setTimeout(() => {
            if (fontWeight === 900) {
                setCountingUp(false);
            }
            if (fontWeight === 100) {
                setCountingUp(true);
            }
            if (countingUp) {
                setFontWeight(fontWeight + 10);
            } else {
                setFontWeight(fontWeight - 10);
            }
        }, 50);
        return () => {
            clearTimeout(updateFontWeightTimeout);
        };
    }, [fontWeight, countingUp]);
    const styles = {
        textTransform: uppercase ? 'uppercase' : 'normal',
        fontSize: '12vw',
        fontVariationSettings: `"wght" ${fontWeight}`,
        ...style,
    };
    return (
        <h1 style={styles} {...props}>
            {children}
        </h1>
    );
}

export default VariableHeadline;
