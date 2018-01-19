FROM resin/rpi-raspbian

RUN apt-get update && \
    apt-get -qy install wget unzip \
                build-essential python \
                ca-certificates \
                curl \
                npm \

RUN curl -LO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-armv6l.tar.gz"

COPY package.json /src/package.json

RUN cd /src; npm install

EXPOSE 3000

COPY . /

CMD ["npm", "start"]
