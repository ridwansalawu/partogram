import React from 'react';
import {Formik} from "formik";
import YupValidate from './Yuppy';
// import {FormGroup} from "reactstrap";

export default function Bishop() {
    return (
        <div>
            <h1>Bishop Score</h1>
        <Formik 
            initialValues = {{ dilatation: "", effacement: "", station: "", descent: "", position: "" }}
            validationSchema={YupValidate}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(()=> {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false)
                }, 2000)
            }}
        >

        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
        })=>(
            <div className="container">
            <form onSubmit={handleSubmit}>
               
                <div className="form-group">
                    <label htmlFor="dilatation">Dilatation</label>
                    <input
                        type="dilatation"
                        name="dilatation"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dilatation}
                        />
                        {errors.dilatation && touched.dilatation && errors.dilatation}
                </div>
                <div className="form-group">
                    <label htmlFor="effacement">Effacement</label>
                    <input
                        type="effacement"
                        name="effacement"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.effacement}
                        />
                        {errors.effacement && touched.effacement && errors.effacement}
                </div>
                <div className="form-group">
                    <label htmlFor="descent">Descent</label>
                    <input
                        type="descent"
                        name="descent"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.descent}
                        />
                        {errors.descent && touched.descent && errors.descent}
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input
                        type="position"
                        name="position"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.position}
                        />
                        {errors.position && touched.position && errors.position}
                </div>
                <div className="form-group">
                    <label htmlFor="station ">Station </label>
                    <input
                        type="station"
                        name="station"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.station }
                        />
                        {errors.station  && touched.station  && errors.station }
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting" : "Submit"}

                </button>



            </form>
            </div>
        )
        }






        </Formik>


            
        </div>
    )
}
