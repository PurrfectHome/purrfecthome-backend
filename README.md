# purrfecthome-backend

## Overview

Purrfecthome-backend is the backend repository for the PurrfectHome application—a mobile app that utilizes MongoDB, GraphQL, and Apollo Server as its core systems, all implemented in TypeScript. This repository provides an API seamlessly integrated with the PurrfectHome frontend, catering to its various requirements

## Backend ToDos

- [x] Skema Database
- [x] SettingUp Environment
- [ ] API
    [x] User Account
      [x] Mutation (login)
      [x] Mutation (loginGoogle)
      [x] Mutation (register)
    [x] Home Screen
      [x] Query (postsByRadius(limit, breed)) (by radius)
      [x] Include get current location (city) from Google Maps API
    [x] Profile Screen
      [x] Query (usersProfile) → include Release(history of posting) and Adoption
    [x] Add Post Screen
      [x] Mutation (addPost)
        [x] Generate treatment suggestion from openai
    [x] Post Detail Screen
      [x] Query (postsById) → include treatment suggestion from openai
    [x] Adoptable Post Screen
      [x] Query (postsByPosterId)
      [x] Query (usersByUsername)
      [x] Mutation (updateAdopter)
      [x] Mutation (deletePost)
      [x] Mutation (editPost)
    [ ] Chat History
      [x] Query (usersById) -> Profile Other User
      [ ] Query (chats)
    [ ] Chat Room
      [ ] Query (chats)
      [ ] SOCKET chat
[x] Seeding USER
[x] Seeding POST 
[x] Authentication (all exclude Auth Actions(register+login))
[x] Authorization (Update Post + Update Status Post + Delete Post)
- [ ] Finalization