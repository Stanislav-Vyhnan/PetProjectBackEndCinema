import Posters from '../models/posterModel.js';

export const getPosterById = async (req, res) => {
  try {
    const posters = await Posters.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(posters[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createPoster = async (req, res) => {
  try {
    await Posters.create(req.body);
    res.json({
      message: 'Product Created',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
