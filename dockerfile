FROM node:latest

RUN mkdir /CCISA
COPY . /CCISA

WORKDIR /CCISA
RUN npm install

RUN npm install -g serve
RUN npm run build 

CMD serve -s build -l 443