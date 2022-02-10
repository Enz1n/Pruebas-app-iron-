import { Document } from "mongoose";
import { ProcessorStatusEnum } from "../enums";
export interface PixelEventInterface extends Document {
  pixelId: string;
  eventType: string;
  data: any;
  date: any;
  location: string;
  processed: ProcessorStatusEnum;
  _collector: String,
  _processed: ProcessorStatusEnum | boolean;
}