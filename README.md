# purrfecthome-backend

## Overview

Purrfecthome-backend is the backend repository for the PurrfectHome application—a mobile app that utilizes MongoDB, GraphQL, and Apollo Server as its core systems, all implemented in TypeScript. This repository provides an API seamlessly integrated with the PurrfectHome frontend, catering to its various requirements

## Backend ToDos

- [ ] Skema Database
- [ ] SettingUp Environment
- [ ] API
    - [x] User Account
     - [x] POST /login
     - [x] POST /login/google
     - [x] POST /register
    - [ ] Home Screen
      - [x] GET /posts (by radius)
      - [ ] GET /posts?limit=&breed=
    - [ ] Profile Screen
      - [x] GET /user (by Id)
      - [x] GET /post (by posterId)
      - [x] GET /adopted (by adopterId)
    - [ ] Add Post Screen
    -  [x] POST /posts
    -   [ ] Generate treatment suggestion from openai
    - [ ] Edit Post Screen
      - [x] GET /posts/:id (by Id)
      - [ ] PUT /posts/:id
    - [ ] Post Detail Screen
    -  [ ] GET /posts (by id) → include treatment suggestion from openai
    - [ ] Adoptable Post Screen
    -  [x] GET /posts (by adopterId)
    -  [x] GET /users (by username)
    -  [x] PUT /posts/status/:id (membawa status & userId)
    - [ ] Chat History
    -  [ ] GET /chats (by userId)
    - [ ] Chat Room
    -  [ ] GET /chats/:roomId
    -  [ ] SOCKET chat
    - [x] Seeding USER
    - [ ] Seeding POST








- [ ] TDD
    - [ ] /register (POST)
    - [ ] /login (POST)
    - [ ] /posts (POST)
    - [ ] /posts (GET) + filtering by location dan biaya adopsi
    - [ ] /likes (POST)
    - [ ] /posts/[PostId] (GET)
    - [ ] /posts (PUT)
    - [ ] /posts (PATCH)
    - [ ] /posts (DELETE)
    - [ ] /users/[UserId] (GET)
    - [ ] /posts/[UserId] (GET)
    - [ ] /chats (GET)
    - [ ] /chats (POST)
    - [ ] /logout (POST)
- [ ] API DOCS
- [ ] Finalization