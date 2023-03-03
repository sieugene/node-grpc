import * as grpc from '@grpc/grpc-js'
import { ProtoGrpcType } from 'proto/types/news'
import { GRPC_API, NEW_PROTO_PATH } from './constants'
import { loadProto } from './utils/loadProto'

export function runServer() {
    const newsProto = loadProto<ProtoGrpcType>(NEW_PROTO_PATH)
    const server = new grpc.Server()
    let news = [
        {
            id: '1',
            title: 'Note 1',
            body: 'Content 1',
            postImage: 'Post image 1',
        },
        {
            id: '2',
            title: 'Note 2',
            body: 'Content 2',
            postImage: 'Post image 2',
        },
    ]

    server.addService(newsProto.NewsService.service, {
        getAllNews: (call: any, callback: any) => {
            callback(null, {
                news,
            })
        },
    })

    server.bindAsync(
        GRPC_API,
        grpc.ServerCredentials.createInsecure(),
        (error: any, port: any) => {
            console.log(`Server running at ${GRPC_API}`)
            server.start()
        }
    )
}
