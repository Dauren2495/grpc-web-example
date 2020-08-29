FROM golang:latest
WORKDIR server
ADD . .
RUN go build -o server server.go
CMD ./server

