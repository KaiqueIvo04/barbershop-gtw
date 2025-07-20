FROM registry.access.redhat.com/ubi8/nodejs-14:1

# Copy app source
COPY . .

# Install app dependencies
RUN npm install

EXPOSE 8080
EXPOSE 8081

CMD ["npm", "start"]
