// Original file: src/proto/news.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _Empty, Empty__Output as _Empty__Output } from './Empty';
import type { NewsList as _NewsList, NewsList__Output as _NewsList__Output } from './NewsList';

export interface NewsServiceClient extends grpc.Client {
  GetAllNews(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  GetAllNews(argument: _Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  GetAllNews(argument: _Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  GetAllNews(argument: _Empty, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  getAllNews(argument: _Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  getAllNews(argument: _Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  getAllNews(argument: _Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  getAllNews(argument: _Empty, callback: grpc.requestCallback<_NewsList__Output>): grpc.ClientUnaryCall;
  
}

export interface NewsServiceHandlers extends grpc.UntypedServiceImplementation {
  GetAllNews: grpc.handleUnaryCall<_Empty__Output, _NewsList>;
  
}

export interface NewsServiceDefinition extends grpc.ServiceDefinition {
  GetAllNews: MethodDefinition<_Empty, _NewsList, _Empty__Output, _NewsList__Output>
}
