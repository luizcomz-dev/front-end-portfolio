export type Theme = {
    colors: {
        background: string;
        primary: string;
        secondary: string;
    };
};

export const lightTheme: Theme = {
    colors: {
        background: '#fff',
        primary: '#4245E5',
        secondary: '#6B7F82',
    },
};

export const darkTheme: Theme = {
    colors: {
        background: '#0F0F0F',
        primary: '#4245E5',
        secondary: '#6B7F82',
    }
};