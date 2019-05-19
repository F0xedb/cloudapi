```
 ____    ___                       __      ______  ____         __             
/\  _`\ /\_ \                     /\ \    /\  _  \/\  _`\   __ /\ \            
\ \ \/\_\//\ \     ___   __  __   \_\ \   \ \ \L\ \ \ \L\ \/\_\\ \/      ____  
 \ \ \/_/_\ \ \   / __`\/\ \/\ \  /'_` \   \ \  __ \ \ ,__/\/\ \\/      /',__\ 
  \ \ \L\ \\_\ \_/\ \L\ \ \ \_\ \/\ \L\ \   \ \ \/\ \ \ \/  \ \ \      /\__, `\
   \ \____//\____\ \____/\ \____/\ \___,_\   \ \_\ \_\ \_\   \ \_\     \/\____/
    \/___/ \/____/\/___/  \/___/  \/__,_ /    \/_/\/_/\/_/    \/_/      \/___/ 

```

# Cloud api's project

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)

This repo contains the frontend and backend for Cloud api.

## Prerequesite

- npm

- ng cli

- dotnet

- dotnet core

- mvc

- ms sql

  

## deploy

Dependencies for dotnet core 2.0 on debian based systems

```
    liblttng-ust0
    libcurl3 (for 14.x and 16.x)
    libcurl4 (for 18.x)
    libssl1.0.0
    libkrb5-3
    zlib1g
    libicu52 (for 14.x)
    libicu55 (for 16.x)
    libicu57 (for 17.x)
    libicu60 (for 18.x)
```

Alternativly use this script

```
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg

#ubuntu 16.04
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-xenial-prod xenial main" > /etc/apt/sources.list.d/dotnetdev.list'
sudo apt-get update

#ubuntu 17.10
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-artful-prod artful main" > /etc/apt/sources.list.d/dotnetdev.list'
sudo apt-get update
 
#Ubuntu 17.04
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-zesty-prod zesty main" > /etc/apt/sources.list.d/dotnetdev.list'
sudo apt-get update

sudo apt-get install dotnet-sdk-2.1.4
```



to test the app use the following command

```
dotnet run # run it in the app root
```