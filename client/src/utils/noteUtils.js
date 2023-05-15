import { graphQLRequest } from "./request";

export const notesLoader = async ({ params: { folderId } }) => {
    console.log("loader", { folderId });
    const query = `query ExampleQuery($folderId: String) {
        folder(folderId: $folderId) {
          id
          name
          notes {
            id
            content
          }
        }
    }`;

    const data = await graphQLRequest({
        query,
        variables: {
            folderId: folderId,
        },
    });
    return data;
};

export const noteLoader = async ({ params: { noteId } }) => {
    console.log("loader", { noteId });
    const query = `query ExampleQuery($noteId: String) {
        note(noteId: $noteId) {
          id
          content
        }
    }`;

    const data = await graphQLRequest({
        query,
        variables: {
            noteId,
        },
    });
    return data;
};
