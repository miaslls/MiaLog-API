'use strict';

import mongoose from 'mongoose';

export const validMoodId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'invalid ID' });
  }

  next();
};

export const validMoodBody = (req, res, next) => {
  const { type, icon, dateTime } = req.body;

  if (!type || !icon || !dateTime) {
    return res.status(400).send({ message: 'incomplete data' });
  }

  type = Number(type);

  if (type < 0 || type > 6 || isNaN(type)) {
    return res.status(400).send({ messae: 'invalid type' });
  }

  next();
};
