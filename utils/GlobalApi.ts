import { gql, request } from "graphql-request";
import { Teacher } from "../types/teacher";

const MASTER_API_URL = `https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/${process.env.HYGRAPH_API}/master`;

console.log("MASTER_API_URL:", MASTER_API_URL);

const query = gql`
  query MyQuery {
    teachers {
      email
      name
      teacherId
      teacherImage {
        url
      }
    }
  }
`;

const fetchTeachers = async (): Promise<Teacher[]> => {
  try {
    const data = await request<{ teachers: Teacher[] }>(MASTER_API_URL, query);
    console.log("Teachers fetched successfully:", data.teachers);
    return data.teachers;
  } catch (error) {
    console.error("Error fetching teachers:", error);
    throw new Error("Failed to fetch teachers");
  }
};

export default fetchTeachers;
