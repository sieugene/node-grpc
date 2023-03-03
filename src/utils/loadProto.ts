import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
}

export function loadProto<T>(path: string): T {
    return grpc.loadPackageDefinition(
        protoLoader.loadSync(path, options)
    ) as any
}
