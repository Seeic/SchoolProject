import React from "react";
import { Text, View } from "react-native";
import { createServer } from "miragejs";

export default function mocktest() {
  if (window.server) {
    server.shutdown();
  }

  window.server = createServer({
    routes() {
      this.post("/api/auth", (request) => {
        console.log(request);
        return { auth: "123" };
      });
      this.get("/api/BookSharingBoard", () => {
        return {
          BookSharing: [
            {
              title: "BookSharing",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-06",
              comment: "댓글",
            },
            {
              title: "BookSharing2",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-26",
              comment: "댓글",
            },
            {
              title: "BookSharing3",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-16",
              comment: "댓글",
            },
            {
              title: "BookSharing4",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-12",
              comment: "댓글",
            },
            {
              title: "BookSharing5",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
            {
              title: "BookSharing6",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-01",
              comment: "댓글",
            },
            {
              title: "BookSharing7",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-09",
              comment: "댓글",
            },
            {
              title: "BookSharing8",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-03",
              comment: "댓글",
            },
            {
              title: "BookSharing9",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
          ],
        };
      });
      this.get("/api/InformationBoard", () => {
        return {
          Information: [
            {
              title: "Information1",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-06",
              comment: "댓글",
            },
            {
              title: "Information2",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-26",
              comment: "댓글",
            },
            {
              title: "Information3",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-16",
              comment: "댓글",
            },
            {
              title: "Information4",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-12",
              comment: "댓글",
            },
            {
              title: "Information5",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
            {
              title: "Information6",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-01",
              comment: "댓글",
            },
            {
              title: "Information7",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-09",
              comment: "댓글",
            },
            {
              title: "Information8",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-03",
              comment: "댓글",
            },
            {
              title: "Information9",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
          ],
        };
      });

      this.get("/api/EmploymentBoard", () => {
        return {
          Employment: [
            {
              title: "Employment",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-06",
              comment: "댓글",
            },
            {
              title: "Employment2",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-26",
              comment: "댓글",
            },
            {
              title: "Employment3",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-16",
              comment: "댓글",
            },
            {
              title: "Employment4",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-12",
              comment: "댓글",
            },
            {
              title: "Employment5",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
            {
              title: "Employment6",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-01",
              comment: "댓글",
            },
            {
              title: "Employment7",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-09",
              comment: "댓글",
            },
            {
              title: "Employment8",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-03",
              comment: "댓글",
            },
            {
              title: "Employment9",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
          ],
        };
      });

      this.get("/api/MentoringBoard", () => {
        return {
          Mentoring: [
            {
              title: "Mentoring",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-06",
              comment: "댓글",
            },
            {
              title: "Mentoring2",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-26",
              comment: "댓글",
            },
            {
              title: "Mentoring3",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-16",
              comment: "댓글",
            },
            {
              title: "Mentoring4",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-12",
              comment: "댓글",
            },
            {
              title: "Mentoring5",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
            {
              title: "Mentoring6",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-01",
              comment: "댓글",
            },
            {
              title: "Mentoring7",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-09",
              comment: "댓글",
            },
            {
              title: "Mentoring8",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-03",
              comment: "댓글",
            },
            {
              title: "Mentoring9",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
          ],
        };
      });
      this.get("/api/ProjectBoard", () => {
        return {
          Project: [
            {
              title: "Project",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-06",
              comment: "댓글",
            },
            {
              title: "Project2",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-26",
              comment: "댓글",
            },
            {
              title: "Project3",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-16",
              comment: "댓글",
            },
            {
              title: "Project4",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-12",
              comment: "댓글",
            },
            {
              title: "Project5",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
            {
              title: "Project6",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-01",
              comment: "댓글",
            },
            {
              title: "Project7",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-09",
              comment: "댓글",
            },
            {
              title: "Project8",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-03",
              comment: "댓글",
            },
            {
              title: "Project9",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
          ],
        };
      });
      this.get("/api/Studyboard", () => {
        return {
          Studyboard: [
            {
              title: "Study",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-06",
              comment: "댓글",
            },
            {
              title: "Study2",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-26",
              comment: "댓글",
            },
            {
              title: "Study3",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-16",
              comment: "댓글",
            },
            {
              title: "Study4",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-12",
              comment: "댓글",
            },
            {
              title: "Study5",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
            {
              title: "Study6",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-01",
              comment: "댓글",
            },
            {
              title: "Study7",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-09",
              comment: "댓글",
            },
            {
              title: "Study8",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-03",
              comment: "댓글",
            },
            {
              title: "Study9",
              contents: "내용",
              writer: "글쓴이",
              time: "2022-01-02",
              comment: "댓글",
            },
          ],
        };
      });
    },
  });
}
