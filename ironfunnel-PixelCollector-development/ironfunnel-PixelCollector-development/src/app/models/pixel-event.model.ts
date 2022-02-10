import { ProcessorStatusEnum } from "../enums";
import { model, Schema, Document } from "mongoose";
import { PixelEventInterface } from "../interfaces/pixel-event.interface";

const PixelEventSchema = new Schema({
  pixelId: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  data: {
    type: Schema.Types.Mixed,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  processed: {
    type: String,
    enum: ProcessorStatusEnum,
    default: ProcessorStatusEnum.PENDING,
    required: true,
  },
  _collector: String,
  _processed: {
    type: String,
    enum: ProcessorStatusEnum,
    default: ProcessorStatusEnum.PENDING,
    required: true,
  },
});

const PixelEventModel = model<PixelEventInterface>(
  "PixelEvent",
  PixelEventSchema
);

export { PixelEventModel };
