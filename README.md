# purrfecthome-backend

## Overview

Purrfecthome-backend is the backend repository for the PurrfectHome application—a mobile app that utilizes MongoDB, GraphQL, and Apollo Server as its core systems, all implemented in TypeScript. This repository provides an API seamlessly integrated with the PurrfectHome frontend, catering to its various requirements

## Backend ToDos

- [ ] Skema Database
- [ ] SettingUp Environment
- [x] Authentication
- [ ] Authorization
- [ ] API
    - [x] User Account
     - [x] POST /login
     - [x] POST /login/google (testing)
     - [x] POST /register
    - [ ] Home Screen
      - [x] GET /posts (by radius) (testing)
      - [ ] GET /posts?limit=&breed=
    - [ ] Profile Screen
      - [x] GET /user (by Token) (testing)
      - [x] GET /user (by Id) (testing)
      - [x] GET /post (by posterId) (testing)
      - [x] GET /adopted (by adopterId) (testing)
    - [ ] Add Post Screen
     - [x] GET /informations (get information by breed)
     - [x] POST /posts (authentication)
      - [x] Generate treatment suggestion from openai
    - [ ] Edit Post Screen
      - [x] GET /posts/:id (by Id) (testing)
      - [x] PUT /posts/:id (authorization)
    - [ ] Post Detail Screen
     - [x] GET /posts/:id (by id) → include treatment suggestion from openai (testing + gabungin query treatment suggestion)
    - [ ] Adoptable Post Screen
     - [x] GET /posts (by adopterId) (testing)
     - [x] GET /users (by username) (testing)
     - [x] PUT /posts/status/:id (membawa status & userId)
    - [ ] Chat History
    -  [ ] GET /chats (by userId)
    - [ ] Chat Room
    -  [ ] GET /chats/:roomId
    -  [ ] SOCKET chat
    - [x] Seeding USER
    - [x] Seeding POST








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