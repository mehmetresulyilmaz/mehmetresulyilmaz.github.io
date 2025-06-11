export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
}

export interface AboutInfo {
    name: string;
    skills: string[];
    background: string;
}

export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}