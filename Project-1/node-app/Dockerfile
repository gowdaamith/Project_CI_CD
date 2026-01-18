FROM  node:18-slim AS BUILDER
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY  . .
RUN npm run build 

FROM node:18-slim
WORKDIR /app
COPY --from=BUILDER /app/package*.json ./
RUN npm ci --omit=dev
COPY --from=BUILDER /app/dist ./dist
EXPOSE 3000
CMD ["npm","start"]
