const AWS = require("aws-sdk")

const s3Config = {
  s3ForcePathStyle: true
}
const isLocal = process.env.IS_OFFLINE

if(isLocal) {
  // Não é necessário usar o update quando as variaveis da AWS já estão setadas no docker-compose.yml
  // AWS.config.update({
  //   credentials: {
  //     accessKeyId: 'test',
  //     secretAccessKey: 'test'
  //   }
  // })

  const host = process.env.LOCALSTACK_HOST || "localhost"
  s3Config.endpoint = new AWS.Endpoint(`http://${host}:4566`)
}

const S3 = new AWS.S3(s3Config)

module.exports = {
  S3
}
