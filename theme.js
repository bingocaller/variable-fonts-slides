const tac = {
    textAlign: 'center',
};
export default {
    fonts: {
        body: '"IBM Plex Sans Var", "Open Sans", "Avenir Next", "Helvetica Neue", Roboto, sans-serif',
        monospace: '"Fira Code", "Roboto Mono", monospace',
    },
    fontWeights: {
        body: 400,
        heading: 700,
    },
    colors: {
        text: '#333',
        background: '#fff',
        primary: '#f26f61',
    },
    styles: {
        h1: {
            ...tac,
        },
        h2: {
            ...tac,
        },
        p: {
            ...tac,
            padding: '0 2rem',
        },
        code: {
            ...tac,
            fontFamily:'"Fira Code", "Roboto Mono", monospace'
        }
    },
}
