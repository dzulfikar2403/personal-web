type Project = {
    id: number;
    name: string;
    url: string;
    linkSource: string;
    tech: {
        name: string;
        url: string;
    }[];
};