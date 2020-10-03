FROM node:10-jessie

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 5000

env HA_HOST=https://home.michaellunzer.com
env HA_PORT=443
env HA_TOKEN=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjZTMwMzcxNjMwZWI0Zjk0YTJlNmQ1MDM0NTIyYTk4MSIsImlhdCI6MTYwMDkwMjQwNCwiZXhwIjoxOTE2MjYyNDA0fQ.dAc99wn5iqXCaGyt3drrHi8L-b0wXlVarvIBQ_VQQCw
env HA_ENTITY_TEMPERATURE=sensor.sn1_temperature
env HA_ENTITY_WEATHER=weather.openweathermap
env MOMENT_TIMEZONE=America/Los_Angeles
env MOMENT_LANGUAGE=en-US
# env HA_ENTITY_DARKSKY=sensor.dark_sky_icon

CMD ["npm", "start"]