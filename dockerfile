FROM node:latest

RUN mkdir /CCISA
COPY . /CCISA

WORKDIR /CCISA
RUN npm install

RUN npm install -g serve
RUN npm run build 

CMD serve -s build --ssl-cert /CCISA/cert/fullchain.pem --ssl-key /CCISA/cert/privkey.pem  -l tcp://0.0.0.0:443
