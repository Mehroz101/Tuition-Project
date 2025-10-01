import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  GetTeacherSubject,
  removeSubject,
} from "../../services/TeacherServices/TeacherSubjectService";
import { pushNotify } from "../../errorHandler/Notify";

const ICanTeach = () => {
  // const [subject, setSubject] = useState();
  const {
    data: subjects,
    isLoading,
    isError,
    refetch: subjectRefetch,
  } = useQuery({
    queryKey: ["studentProfile"],
    queryFn: () => GetTeacherSubject(),
  
    onError: (error) => {
      console.error("Error fetching student profile:", error.message);
      pushNotify(400, "SORRY", "Something went wrong. Try again later.");
    },
  
  });
  const removeSubjectMutation = useMutation({
    mutationFn: removeSubject,
    onSuccess: () => {
      subjectRefetch();
    },
    onError: (error) => {
      console.error("Error fetching student profile:", error.message);
      pushNotify(400, "SORRY", "Something went wrong. Try again later.");
    },
  });
  const removesubject = (sub) => {
    console.log(sub);
    removeSubjectMutation.mutate(sub);
  };
  // useEffect(() => {}, [data]);
  // useEffect(() => {
  //   if (data) setSubject(data);
  // }, [data]);
  return (
    <>
      <div className="icanteach_information">
        <div className="icanteach_information_top">
          <h3>Education information</h3>
          <Link to="/profile/icanteach/addnew">Add new</Link>
        </div>
        <div className="icanteach_container">
          <div className="subjects">
            {subjects?.length > 0 ? (
              subjects?.map((sub, index) => (
                <div className="subject" key={index}>
                  <span className="title">{sub.subject}</span>
                  <span className="level">{sub.level}</span>
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => {
                      removesubject(sub);
                    }}
                  ></i>
                </div>
              ))
            ) : (
              <div className="subject">
                <span className="title">No subject added</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ICanTeach;
