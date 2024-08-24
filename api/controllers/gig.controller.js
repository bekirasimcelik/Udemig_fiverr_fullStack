export const getAllGigs = async (req, res, next) => {
  try {
    // ;İsteği atan kşşanıcı hesabı seller değilse hata gönder
    res.status(200).json({ message: "Deneme Başarılı" });
  } catch (err) {
    next(error(400, err.message));
  }
};

export const getGig = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Deneme Başarılı" });
  } catch (err) {
    next(error(400, err.message));
  }
};

export const createGig = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Deneme Başarılı" });
  } catch (err) {
    next(error(400, err.message));
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Deneme Başarılı" });
  } catch (err) {
    next(error(400, err.message));
  }
};
