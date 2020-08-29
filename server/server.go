package main

import (
	"context"
	"fmt"
	"log"
	"net"

	"web/calculatorpb"

	"google.golang.org/grpc"
)

type server struct{}

func (*server) Add(context context.Context, req *calculatorpb.AddRequest) (*calculatorpb.AddResponse, error) {
	fmt.Println("Got a new Add request")
	num1 := req.GetNum1()
	num2 := req.GetNum2()
	sum := num1 + num2
	result := &calculatorpb.AddResponse{Result: sum}
	return result, nil
}

func (*server) Fibonacci(req *calculatorpb.FibonacciRequest, stream calculatorpb.Calculator_FibonacciServer) error {
	fmt.Println("Got a new Fibonacci request")
	count := req.GetCount()
	c := make(chan int, 3)
	go func(count int, c chan int) {
		if count == 1 {
			fmt.Println("Count 1")
			c <- 1
		} else if count == 2 {
			fmt.Println("Count 2")
			c <- 1
			c <- 1
		} else {
			num1 := 1
			num2 := 1
			c <- num1
			c <- num2
			for i := 3; i <= count; i++ {
				result := num1 + num2
				num1 = num2
				num2 = result
				c <- result
			}
			close(c)
		}
	}(int(count), c)

	for num := range c {
		fmt.Println("Reading from channel", num)
		stream.Send(&calculatorpb.FibonacciResponse{Number: int32(num)})
	}

	return nil
}

func main() {
	fmt.Println("Starting Calculator server")
	lis, err := net.Listen("tcp", "0.0.0.0:50551")

	if err != nil {
		log.Fatalf("Error while listening : %v", err)
	}

	s := grpc.NewServer()
	calculatorpb.RegisterCalculatorServer(s, &server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Error while serving : %v", err)
	}

}
