export type Game = {
    author: Author[];
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
    id: string;
    path: string;
    __typename: string;
}

export type ResponseData = {
    games: Game[];
    Date: string;
    ID: string;
}