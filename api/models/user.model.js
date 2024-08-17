import { model, Schema } from "mongoose";

//*
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Lütfen username alanını belirleyin"],
      unique: [
        true,
        "Bu isimde bir kullanıcı mebvut. Lütfen farklı bir nickname belirleyin",
      ],
    },

    email: {
      type: String,
      required: [true, "Lütfen email alanını belirleyin"],
      unique: [true, "Lütfen farklı bir email belirleyin"],
    },

    password: {
      type: String,
      required: [true, "Lütfen şifreyi belirleyin"],
    },

    photo: {
      type: String,
      default: "https://picsum.photos/200",
    },

    country: {
      type: String,
      required: [true, "Lütfen ülkeyi belirleyin."],
    },

    phone: {
      type: Number,
    },

    desc: {
      type: String,
    },

    isSeller: {
      type: Boolean,
      default: false,
    },
  },
  //* ayarlar
  //* timestamps sayesinde oluşturduğumuz bütün belgelere oto olarak createdAt ve updatedAt eklenir
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
