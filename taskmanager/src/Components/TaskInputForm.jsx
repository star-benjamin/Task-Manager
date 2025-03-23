import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function TaskInputForm({ addTask }){
  const validationSchema = Yup.object({
    taskName: Yup.string().required("Task name is required"),
    duration: Yup.number().required("Duration is required").positive("Must be positive"),
    startTime: Yup.string().required("Start time is required"),
  });

  return (
    <Formik
      initialValues={{ taskName: "", duration: "", startTime: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addTask(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
      
        <Form className="p-4 mt-5 ml-5 border-2 rounded-lg shadow-md w-full max-w-md">
          
          <div>
            <label className="pl-2">Enter task name</label>
            <Field type="text" name="taskName" placeholder="Task Name" className="p-2 border w-full m-3 rounded" />
            <ErrorMessage name="taskName" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="pl-2">Duration in minutes</label>
            <Field type="number" name="duration" placeholder="Duration (minutes)" className="p-2 m-3 border w-full rounded" />
            <ErrorMessage name="duration" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="pl-2">Starting Time</label>
            <Field type="time" name="startTime" className="p-2 border w-full rounded m-3" />
            <ErrorMessage name="startTime" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className=" m-3 ml-28 bg-gray-500 text-white p-2 rounded w-[200px] justify-center" disabled={isSubmitting}>
            Add Task
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default TaskInputForm