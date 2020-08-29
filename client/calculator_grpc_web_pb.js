/**
 * @fileoverview gRPC-Web generated client stub for calculator
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.calculator = require('./calculator_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.calculator.CalculatorClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.calculator.CalculatorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.calculator.AddRequest,
 *   !proto.calculator.AddResponse>}
 */
const methodDescriptor_Calculator_Add = new grpc.web.MethodDescriptor(
  '/calculator.Calculator/Add',
  grpc.web.MethodType.UNARY,
  proto.calculator.AddRequest,
  proto.calculator.AddResponse,
  /**
   * @param {!proto.calculator.AddRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.calculator.AddResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.calculator.AddRequest,
 *   !proto.calculator.AddResponse>}
 */
const methodInfo_Calculator_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.calculator.AddResponse,
  /**
   * @param {!proto.calculator.AddRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.calculator.AddResponse.deserializeBinary
);


/**
 * @param {!proto.calculator.AddRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.calculator.AddResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.calculator.AddResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.calculator.CalculatorClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/calculator.Calculator/Add',
      request,
      metadata || {},
      methodDescriptor_Calculator_Add,
      callback);
};


/**
 * @param {!proto.calculator.AddRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.calculator.AddResponse>}
 *     A native promise that resolves to the response
 */
proto.calculator.CalculatorPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/calculator.Calculator/Add',
      request,
      metadata || {},
      methodDescriptor_Calculator_Add);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.calculator.FibonacciRequest,
 *   !proto.calculator.FibonacciResponse>}
 */
const methodDescriptor_Calculator_Fibonacci = new grpc.web.MethodDescriptor(
  '/calculator.Calculator/Fibonacci',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.calculator.FibonacciRequest,
  proto.calculator.FibonacciResponse,
  /**
   * @param {!proto.calculator.FibonacciRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.calculator.FibonacciResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.calculator.FibonacciRequest,
 *   !proto.calculator.FibonacciResponse>}
 */
const methodInfo_Calculator_Fibonacci = new grpc.web.AbstractClientBase.MethodInfo(
  proto.calculator.FibonacciResponse,
  /**
   * @param {!proto.calculator.FibonacciRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.calculator.FibonacciResponse.deserializeBinary
);


/**
 * @param {!proto.calculator.FibonacciRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.calculator.FibonacciResponse>}
 *     The XHR Node Readable Stream
 */
proto.calculator.CalculatorClient.prototype.fibonacci =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/calculator.Calculator/Fibonacci',
      request,
      metadata || {},
      methodDescriptor_Calculator_Fibonacci);
};


/**
 * @param {!proto.calculator.FibonacciRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.calculator.FibonacciResponse>}
 *     The XHR Node Readable Stream
 */
proto.calculator.CalculatorPromiseClient.prototype.fibonacci =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/calculator.Calculator/Fibonacci',
      request,
      metadata || {},
      methodDescriptor_Calculator_Fibonacci);
};


module.exports = proto.calculator;

