import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getUserAbout = async () => {
  const getUserAboutQuery = gql`
    {
        owners {
            pphoto {
              url
            }
            aboutme
          }
    }
  `;

  const { owners } = await graphcms.request(getUserAboutQuery);

  return owners;
};
