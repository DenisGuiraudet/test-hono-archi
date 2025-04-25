import { Document, Schema, model } from 'mongoose'

export interface ICatalogItem extends Document {
  _id: Schema.Types.ObjectId
  title: string
}

const catalogItemSchema = new Schema<ICatalogItem>(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
)

export const CatalogItem = model<ICatalogItem>('CatalogItem', catalogItemSchema)
