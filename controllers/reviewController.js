const Review = require(`${__dirname}/../models/reviews`);

exports.getAll = async (req, res) => {
  const reviews = await Review.findAll();
  res.status(200).json({ data: { reviews } });
};

exports.save = async (req, res) => {
  const body = req.body;
  console.log(body);

  const review = await Review.create(body);
  await review.save();
  res.json({ data: review });
};
