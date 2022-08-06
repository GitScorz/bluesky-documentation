---
id: convars
title: Convars
sidebar_label: Convars
tags: 
  - Convars
  - Setup
---

Convars can be very powerful for defining configuration variables on the server. A convar is basically a configuration variable that you can set and get from any resource. You don't have to use a resource to get or set these values, you can also use commands in the (server) console or through a RCON client.

Make sure you put this in a `.cfg` file.

## Base
```bash
set rrp_version "1.0.0"
set log_level 0
set api_address "http://localhost:1337/"
set api_token "whatever you want"
set motd "Look, it's Blue Sky Framework!"
```

## Mongo DB
```bash
set mongodb_auth_url "mongodb://localhost:27017"
set mongodb_auth_database "your_auth_database"
set mongodb_game_url "mongodb://localhost:27017"
set mongodb_game_database "your_game_database"
```

## MDT
```bash
set mdt_api_address "http://localhost:1337/"
```

## Discord
```bash
set discord_log_webhook "your_discord_webhook"
set discord_bot_token "your_discord_bot_token"
set discord_pwnzor_webhook "your_discord_webhook_anticheat"
```

## Voip
```bash
setr voice_useNativeAudio "true"
setr voice_use3dAudio "true"
setr voice_enableRadioAnim 1
setr voice_useSendingRangeOnly true
```

You can check more convars for **Voip** at [**pma-voice**](https://github.com/AvarianKnight/pma-voice) github repository.

Once that convars are done you need to have the [**MongoDB**](https://www.mongodb.com/) installed and the databases created, I'm pretty sure you can start the server normally after that :D