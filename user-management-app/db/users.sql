create table users (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    email text not null UNIQUE,
    role text not null,
    create_at timestamp default now()
    );