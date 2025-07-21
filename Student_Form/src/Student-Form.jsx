import { useFormik } from "formik";
import * as yup from "yup";

const userSchema = yup.object({
  name: yup.string().required("Enter Your Name"),
  email: yup.string().email().required("Enter Your Email"),
  password: yup.string().min(6,"Please Enter Atleast 6 Character").required("Please Enter Your Password"),
  studentlist: yup.string().required("Select One Grade"),
});

function StudentForm() {
  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      studentlist: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form
        onSubmit={form.handleSubmit}
        style={{
          height: "auto",
          border: "5px solid black",
          margin: "5px",
          padding: "25px",
        }}
      >
        <h1>Student-Form</h1>

        <div style={{ padding: "5px" }}>
          <label>Student Name</label>
          <input
            type="text"
            name="name"
            onChange={form.handleChange}
            value={form.values.name}
          />
          {form.touched.name && form.errors.name && (
            <p style={{ color: "red" }}>{form.errors.name}</p>
          )}
        </div>

        <div style={{ padding: "5px" }}>
          <label>Student Email</label>
          <input
            type="email"
            name="email"
            onChange={form.handleChange}
            value={form.values.email}
          />{" "}
          {form.touched.email && form.errors.email && (
            <p style={{ color: "red" }}>{form.errors.email}</p>
          )}
        </div>

        <div style={{ padding: "5px" }}>
          <label>Student Password</label>
          <input
            type="password"
            name="password"
            onChange={form.handleChange}
            value={form.values.password}
          />{" "}
          {form.touched.password && form.errors.password && (
            <p style={{ color: "red" }}>{form.errors.password}</p>
          )}
        </div>

        <div style={{ padding: "5px" }}>
          <label>Student Grade</label>
          <select
            name="studentlist"
            onChange={form.handleChange}
            value={form.values.studentlist}
          >
            <option value="">Select Grade</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
          </select>
          {form.touched.studentlist && form.errors.studentlist && (
            <p style={{ color: "red" }}>{form.errors.studentlist}</p>
          )}
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
