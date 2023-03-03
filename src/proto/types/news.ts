import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { NewsServiceClient as _NewsServiceClient, NewsServiceDefinition as _NewsServiceDefinition } from './NewsService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Empty: MessageTypeDefinition
  News: MessageTypeDefinition
  NewsList: MessageTypeDefinition
  NewsService: SubtypeConstructor<typeof grpc.Client, _NewsServiceClient> & { service: _NewsServiceDefinition }
}

