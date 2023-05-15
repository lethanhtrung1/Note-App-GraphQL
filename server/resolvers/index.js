import fakeData from "../fakeData/index.js";
import { AuthorModel, FolderModel } from "../models/index.js";

export const resolvers = {
    Query: {
        folders: async (parent, args, context) => {
            const folders = await FolderModel.find({
                authorId: context.uid,
            });
            console.log({ folders, context });
            return folders;
            // return fakeData.folders;
        },
        folder: async (parent, args) => {
            const folderId = args.folderId;
            console.log({ folderId });
            const foundFolder = await FolderModel.findOne({
                _id: folderId,
            });
            return foundFolder;
        },
        note: (parent, args) => {
            const noteId = args.noteId;
            return fakeData.notes.find((note) => note.id === noteId);
        },
    },
    Folder: {
        author: (parent, args) => {
            console.log({ parent, args });
            const authorId = parent.authorId;
            return fakeData.authors.find((author) => author.id === authorId);
            // return {id: '123', name: 'admin'}
        },
        notes: (parent, args) => {
            console.log({ parent });
            return fakeData.notes.filter((note) => note.folderId === parent.id);
        },
    },
    Mutation: {
        addFolder: async (parent, args) => {
            const newFolder = new FolderModel({ ...args, authorId: "123" });
            console.log({ newFolder });
            await newFolder.save();
            return newFolder;
        },
        register: async (parent, args) => {
            const foundFolder = await AuthorModel.findOne({ uid: args.uid });

            if (!foundFolder) {
                const newUser = new AuthorModel(args);
                await newUser.save();
                return newUser;
            }

            return foundFolder;
        },
    },
};
