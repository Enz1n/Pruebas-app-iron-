import { StatusEnum } from "../enums";
import { model, Schema, Document } from "mongoose";

declare interface PixelInterface extends Document {
  code: string;
  status: StatusEnum;
}

const PixelSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: StatusEnum
  }
});

const PixelModel = model<PixelInterface>("Pixel", PixelSchema);

export { PixelInterface, PixelModel };
