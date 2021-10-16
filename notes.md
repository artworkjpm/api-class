# API CLASS 16/10/2022

## OPEN API

use swaggerHub to build standard apis
gitlab/zarape/code-

Order of making an api

1. Design first or code first
2. Draw diagram of API calls and functionalities
3. Describe formats and sequence diagrams - send, parse, wait for next step
   Sequence Diagrams
4. Sketching - for every endpoint we get a response, write down what your server will say eg { response 200}
5. Prototyping - make a mock api, make a prototype
6. Build it

## Use cases are mediums of communication

IE website, phone, specific phone apps, email, sms, telephone

## code it

npx express-generator-api

npm install -g nodemon // to auto refresh server
npx install nodemon

curl http://localhost:3000/api/v1/principles // to get json in terminal
