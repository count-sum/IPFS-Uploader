# IPFS-Uploader
Final Project 

Description:

This Project is a POE for a platform which enables a user to upload files to IPFS , and check through the app’s database of existing files.

The project will have 1 actor:

The User (user of the IPFS service)
	The User will submit a file for upload , and will be able to check the files that have been previously uploaded on Ethereum.


How to Install:

-Install Truffle and Ganache CLI globally. If you prefer, the graphical version of Ganache works as well!
npm install -g truffle
npm install -g ganache-cli

-Install dependencies:

npm install dotenv —save
npm install truffle-hdwallet-provider —save

-run Ganache-Cli with a pre-defined blocktime 
ganache-cli -b 3

-Compile and Migrate smart contracts

Truffle Compile
Truffle Migrate

-Run the webpack server for front-end hot reloading
NPM Run Start
