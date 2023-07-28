module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    id: String,
    createDate: Date,
    status: String,
    client: String,
    shippingAddress: String,
    shippingPromise: Date,
    items: [{}],
  });

  const Orders = mongoose.model("orders", schema);
  return Orders;
};
