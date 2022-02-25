
<h1 align="center">Any Bot!</h1>  

<p align="center">  

<img src="https://github.com/MDCYT/Any-Bot/actions/workflows/pre-release.yml/badge.svg">  

<img src="https://github.com/MDCYT/Any-Bot/actions/workflows/codeql-analysis.yml/badge.svg">  

<img src="https://img.shields.io/github/downloads/MDCYT/Any-Bot/total?color=Green">  

<img src="https://img.shields.io/github/repo-size/MDCYT/Any-Bot">  

<img src="https://img.shields.io/badge/made%20by-MDC-purple.svg" >  

<img src="https://img.shields.io/github/v/release/MDCYT/Any-Bot?include_prereleases">  

<img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" >  

<img src="https://img.shields.io/github/stars/MDCYT/Any-Bot.svg?style=flat">  

<img src="https://img.shields.io/github/languages/top/MDCYT/Any-Bot.svg">  

<img src="https://img.shields.io/github/issues/MDCYT/Any-Bot.svg">  

<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat">  
</p>  

<img src="./README/thumbail.png" width="100%">  

<h2 align="center"><a  href="https://discord.com/api/oauth2/authorize?client_id=733728002910715977&permissions=8&scope=applications.commands%20bot">Demostration</a></h2>

**Content**
- [Description](#Description)
- [Features](#Features)
- [Installation](#Installation)
- [Editing](#Editing)

**NEW MUSIC SYSTEM**

<p align="center">  
<img src="./README/music.gif" width="80%"></p>  



## Description


I am [**Any Bot**](https://top.gg/bot/733728002910715977), a multifunctional Discord bot which is a variation of [**Calypso Bot**](https://github.com/sabattle/CalypsoBot), this variation includes backup commands and some extra fun and useful commands that can be useful in any bot.

<p align="center">  

[![Discord Bots](https://top.gg/api/widget/status/733728002910715977.svg?noavatar=true)](https://top.gg/bot/733728002910715977)   
[![Discord Bots](https://top.gg/api/widget/servers/733728002910715977.svg?noavatar=true)](https://top.gg/bot/733728002910715977)   
[![Discord Bots](https://top.gg/api/widget/upvotes/733728002910715977.svg?noavatar=true)](https://top.gg/bot/733728002910715977)   
[![Discord Bots](https://top.gg/api/widget/owner/733728002910715977.svg?noavatar=true)](https://top.gg/bot/733728002910715977)

</p>  

# Features

The Bot has more than 190 commands and 13 categories with which you have a variety of useful and fun commands.

- Categories:
  - **Info**
  - **Fun**
  - **Animals**
  - **Color**
  - **Points**
  - **Levels**
  - **Misc**
  - **Games**
  - **Social**
  - **Mod**
  - **Admin**
  - **Music**
  - **Backup**
  - **Owner**
  - **Nsfw**


## Installation
You can add Any Bot to your server with [this](https://discordapp.com/oauth2/authorize?client_id=733728002910715977&scope=bot&permissions=8)  link! Alternatively, you can clone this repo and host the bot yourself.

```  
git clone https://github.com/MDCYT/Any-Bot.git  
```  
### Requirements
- Node v16
- A PC
-  Have hope

After cloning, run an

```  
npm install  
```  
After installation edit the ` config-example.json`

```json  
{  
  "ownerId": "Your_Id",  
  "developers": [  
        "Only if you have developers",
        "Only if you have more of 1 developer" 
  ],  
  "botID": "Bot_Id",  
  "bugReportChannelId": "Your_Bug_Report_Channel_Id",  
  "feedbackChannelId": "Your_Feedback_Channel_Id",  
  "serverLogId": "Your_Server_Log_Channel_Id",  
  "supportServerInvite": "Your_Support_Server_Invite",  
  "mongodb_url": "Your_MongoDB_Url", //This is in testing, it does not affect the bot at all and it does not currently work  
  "botStats":{  
      "guilds_channel": "Your_Guilds_Channel_Stats_Bot",  //A voice channel where the number of servers that use the bot will be displayed
      "users_channel": "Your_Users_Channel_Stats_Bot"  //A voice channel where the number of users using the bot will be displayed
  },  
  "apiKeys": {  
   "catApi": "Cat_Api_Key",  //Obtain a key in https://thecatapi.com/ (Only affect the Cat Command)
  "googleApi": "Google_Api_Key",  //Obtain a key in https://console.developers.google.com/ (Only affect the Youtube Command)
  "fortniteshopApi": "Fortnite_Shop_Key", //Obtain a key in https://fnbr.co/api/docs (Only affect the Fortnite Shop command)
  "fortniteApi": "Fortnite_Api_Key",  //Obtain a key in https://fortnitetracker.com/site-api (Only affect the Fortnite User command)
  "geometrydash": {  
      "user": "Username",  //Geometry Dash User
	  "password": "Password"  //Geometry Dash Password
  },  //(Only affect the GD User command)
  "openweathermap": "OpenWatherMap_Api_Key",  //Obtain a key in  https://openweathermap.org/api (Only affect the Weather command)
  "nasaapi": "Nasa_Api_Key",  //Obtain a key in https://api.nasa.gov/ (Only affect the APOD command)
  "uberduckapi_key": "UberDuck_Api_Key",  //Obtain a key in https://uberduck.ai/account/manage (Only affect the IAVoice command)
  "uberduckapi_secret": "UberDuck_Api_Secret",//Obtain a key in https://uberduck.ai/account/manage (Only affect the IAVoice command)  
  "osuapikey": "Osu_Api_Key"  //Obtain a key in https://osu.ppy.sh/p/api (Only affect the IAVoice command)  
  },  
  "botlist": false  //Only active this if your bot is in a Bot list (Edit this in src/utils/botlist.js)
  } 
```  
After editing the `config-example.json` , rename to `config.json`

Now, edit the ` .env-example`

``` dotenv
TOKEN=Your_Bot_Token
GUILD_ID=Your_Guild_Id
ENV=production #This will define if the slash commands are put or not
``` 
After editing the `.env-example` , rename to `.env`

start the bot with `node app` from the terminal
```  
node app  
```  

Optional you can start the bot with `node shard` if your bot is in more than five hundred servers.
```  
node shard  
```  


Make sure you have **PRESENCE INTENT** and **SERVER MEMBERS INTENT** enabled on your bot.
<p align="center">  
<img src="./README/intents.gif" width="80%"></p>  


## Need help?

You can enter the [Any Bot Support server](https://discord.gg/2FRpkNr)
