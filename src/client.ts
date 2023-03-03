import * as grpc from '@grpc/grpc-js'
import { GRPC_API, NEW_PROTO_PATH } from './constants'
import { ProtoGrpcType } from './proto/types/news'
import { loadProto } from './utils/loadProto'

export const initClient = () => {
    const newsProto = loadProto<ProtoGrpcType>(NEW_PROTO_PATH)

    const NewsService = newsProto.NewsService

    const client = new NewsService(GRPC_API, grpc.credentials.createInsecure())
    console.log('Client was inited')
    client.getAllNews({}, (error, news) => {
        // if (!error) throw error
        console.log('GET NEWS', news)
    })
}
