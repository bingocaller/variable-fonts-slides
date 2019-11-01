import React, { useEffect, useState } from 'react';

const MIN_FONT_WEIGHT = 100;
const MAX_FONT_WEIGHT = 700;
const MIN_FONT_WIDTH = 85;
const MAX_FONT_WIDTH = 100;

function VariableHeadline({ uppercase, children, style, ...props }) {
    const [fontWeight, setFontWeight] = useState(MAX_FONT_WEIGHT);
    const [fontWidth, setFontWidth] = useState(MAX_FONT_WIDTH);
    const [countingUpWeight, setCountingUpWeight] = useState(true)
    const [countingUpWidth, setCountingUpWidth] = useState(true)
    useEffect(() => {
        const updateFontWeightTimeout = setTimeout(() => {
            if (fontWeight >= MAX_FONT_WEIGHT) {
                setCountingUpWeight(false);
            }
            if (fontWeight <= MIN_FONT_WEIGHT) {
                setCountingUpWeight(true);
            }
            if (countingUpWeight) {
                setFontWeight(fontWeight + 10);
            } else {
                setFontWeight(fontWeight - 10);
            }
        }, 50);
        return () => {
            clearTimeout(updateFontWeightTimeout);
        };
    }, [fontWeight, countingUpWeight]);
    useEffect(() => {
        const updateFontWidthTimeout = setTimeout(() => {
            if (fontWidth >= MAX_FONT_WIDTH) {
                setCountingUpWidth(false);
            }
            if (fontWidth <= MIN_FONT_WIDTH) {
                setCountingUpWidth(true);
            }
            if (countingUpWidth) {
                setFontWidth(fontWidth + 1);
            } else {
                setFontWidth(fontWidth - 1);
            }
        }, 50);
        return () => {
            clearTimeout(updateFontWidthTimeout);
        };
    }, [fontWidth, countingUpWidth]);
    const styles = {
        textAlign: 'center',
        fontSize: '12vw',
        fontVariationSettings: `"wght" ${fontWeight}, "wdth" ${fontWidth}`,
        textTransform: uppercase ? 'uppercase' : 'normal',
        ...style,
    };
    return (
        <>
            <h1 style={styles} {...props}>
                {children}
            </h1>
            <code style={{
                textAlign: 'center',
                padding: '0 2rem',
                fontFamily:'"Fira Code", "Roboto Mono", monospace',
            }}>
                font-variation-settings:<br/>{`"wght" ${fontWeight}, "wdth" ${fontWidth}`};
            </code>
        </>
    );
}

export default VariableHeadline;
