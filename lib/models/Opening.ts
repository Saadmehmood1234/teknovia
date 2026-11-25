import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOpening extends Document {
  id: string;
  title: string;
  department: string;
  category: "job" | "internship";
  type: "Full-time" | "Part-time" | "Internship";
  location: string;
  workplaceType: "Hybrid" | "On-site" | "Remote";
  experience?: string;
  duration?: string;
  stipendOrSalary: string;
  shortDescription: string;
  aboutRole: string[];
  responsibilities: string[];
  requirements: string[];
  whoYouAre: string[];
  benefits: string[];
  featured: boolean;
  status: "Active" | "Inactive";
  postedDate: string;
  createdAt: Date;
  updatedAt: Date;
}

const OpeningSchema: Schema<IOpening> = new Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true, default: "Engineering" },
    category: { type: String, required: true, enum: ["job", "internship"], default: "job", index: true },
    type: { type: String, default: "Full-time" },
    location: { type: String, default: "Noida, Sector 149" },
    workplaceType: { type: String, enum: ["Hybrid", "On-site", "Remote"], default: "Hybrid" },
    experience: { type: String },
    duration: { type: String },
    stipendOrSalary: { type: String, default: "Competitive" },
    shortDescription: { type: String, default: "" },
    aboutRole: { type: [String], default: [] },
    responsibilities: { type: [String], default: [] },
    requirements: { type: [String], default: [] },
    whoYouAre: { type: [String], default: [] },
    benefits: { type: [String], default: [] },
    featured: { type: Boolean, default: false },
    status: { type: String, enum: ["Active", "Inactive"], default: "Active", index: true },
    postedDate: { type: String },
  },
  {
    timestamps: true,
  }
);

export const OpeningModel: Model<IOpening> =
  (mongoose.models && mongoose.models.Opening
    ? (mongoose.models.Opening as Model<IOpening>)
    : mongoose.model<IOpening>("Opening", OpeningSchema));
