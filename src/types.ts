import { ExitStatus } from "typescript"

export type Game = {
    author: Author;
    author_id: string;
    author_type: null
    created_at: string;
    description: string;
    game_posters: Game_Posters[];
    game_serving_points: []
    genre: string;
    id: string;
    language: string;
    title: string;
    updated_at: string;
    __typename: string;
}

export type GameCard = {
    genre: string;
}

export type Author = {
    avatar: string;
    bio: string;
    created_at: string;
    email: string;
    email_verified_at: null
    id: string;
    locale: string;
    location: null
    mfa_enabled: null
    name: string;
    password: string;
    phone_number: null
    remember_token: null
    updated_at: string;
    username: string;
    __typename: string;
}

export type Game_Posters = {
    file: FileDetails;
    __typename: string;
}
export type FileDetails = {
    id: string;
    path: string;
    __typename: string;
}
export type ResponseData = {
    games: Game[];
    id: string;
    __typename: string;
}
export type Genre = {
    tag: { __typename: string, name: string }
    __typename: string;
}

export type Genres = {
    data: Genre[];
    
}

export type GameGenres = {
    id: string;
    __typename: string;
    game: Game;

}

export type QueryResponse = {
    tags : Tag[];
} 
export type Tag = {
    __typename: string;
    id: string;
    game_genres: GameGenres[];
}