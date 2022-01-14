import Posters from '../models/posterModel.js';

export const getAllPosters = async (req, res) => {
  try {
    const posters = await Posters.findAll();
    res.json(posters);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getPosters = async (req, res) => {
  try {
    const posters = await Posters.findAll({
      attributes: ['id', 'title', 'genre', 'nameImg'],
    });
    res.json(posters);
  } catch (error) {
    res.json({ message: error.message });
  }
};

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
    const nameImg = req.file.filename;
    await Posters.create({ ...req.body, nameImg });
    res.json({
      message: 'Poster Created',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updatePoster = async (req, res) => {
  try {
    await Posters.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Poster Updated',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deletePoster = async (req, res) => {
  try {
    await Posters.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Poster Deleted',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
