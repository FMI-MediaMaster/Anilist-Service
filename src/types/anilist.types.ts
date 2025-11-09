export interface MediaOption {
    id: string;
    name: string;
};

export interface Query {
    name?: string;
    id?: string;
};

interface Title {
    romaji: string;
    english: string;
};

interface StartDate {
    year: number;
};

export interface SearchResult {
    id: string;
    title?: Title;
    startDate?: StartDate;
};

interface Page {
    media?: SearchResult[];
};

export interface ResponseBody {
    data?: Object; 
};

export interface SearchResponse {
    Page?: Page;
};