export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://raulhrosa:gfLCDp7gqB!i@cluster0.q5jqi.mongodb.net/clean_node_api?retryWrites=true&w=majority',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || '12sds==SD'
}
