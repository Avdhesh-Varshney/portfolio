import { IoMdPhotos } from "react-icons/io";
import { defineField } from "sanity";

const photo = {
  name: "photo",
  title: "Photos",
  description: "Photo Schema",
  type: "document",
  icon: IoMdPhotos,
  fields: [
    defineField({
      name: "alt",
      title: "Name",
      type: "string",
      description: "Enter the name of the photo",
    }),
    defineField({
      name: "src",
      title: "Your Image",
      type: "image",
      description: "Upload your image",
    }),
  ],
};

export default photo;
