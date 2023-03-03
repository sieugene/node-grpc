import * as protoLoader from '@grpc/proto-loader'
import * as grpc from '@grpc/grpc-js'

const PROTO_PATH = "./src/proto/news.proto"


const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};


export async function runServer(){
	const newsProto = await protoLoader.load(PROTO_PATH, options).then(def => {
		return grpc.loadPackageDefinition(def);
	  });
	const server = new grpc.Server();
	let news = [
	  { id: "1", title: "Note 1", body: "Content 1", postImage: "Post image 1" },
	  { id: "2", title: "Note 2", body: "Content 2", postImage: "Post image 2" },
	];
	
	server.addService((newsProto.NewsService as any).service, {
	  getAllNews: (_:any, callback:any) => {
		callback(null, news);
	  },
	});
	
	server.bindAsync(
	  "127.0.0.1:50051",
	  grpc.ServerCredentials.createInsecure(),
	  (error:any, port:any) => {
		console.log("Server running at http://127.0.0.1:50051");
		server.start();
	  }
	);
}

