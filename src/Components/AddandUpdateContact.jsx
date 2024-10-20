import React from "react";
import { Field, Form, Formik } from "formik";
import Model from "./Model"
import { db } from "../config/firebase";
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { toast } from "react-toastify";


let AddandUpdateContact = ({ onClosed, isOpen, isUpdate, contact }) => {
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "Contacts");
            await addDoc(contactRef, contact);
            onClosed();
            toast.success("Contact Added SuccessFully")
        }
        catch (error) {
            console.log(error);
        }
    };

    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "Contacts", id);
            await updateDoc(contactRef, contact);
            onClosed();
            toast.success("Contact Updated Successfully");
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Model isOpen={isOpen} onClosed={onClosed}>
                <Formik
                    initialValues={
                        isUpdate
                            ? {
                                Name: contact.Name,
                                Email: contact.Email,
                                Number: contact.Number,

                            }
                            : {
                                name: "",
                                email: "",
                                number: "",
                            }
                    }


                    onSubmit={(values) => {
                        isUpdate ?
                            updateContact(values, contact.id)
                            :
                            addContact(values);
                    }} >
                    <Form>
                        <div className="inbox">
                            <label htmlFor="name">Name</label>
                            <Field className="field" type="text" name="Name" required />
                            {/* <span className="error-message">Please enter a Name.</span> */}
                            <label htmlFor="name">Number</label>
                            <Field className="field" type="nmber" name="Number" required />
                            {/* <span className="error-message">Please enter a Number.</span> */}
                            <label htmlFor="email">Email</label>
                            <Field className="field" type="text" name="Email" required />
                            {/* <span className="error-message">Please enter a Email.</span> */}
                        </div>
                        <button className="btn" type="submit">
                            {isUpdate ? "Update" : "Add"} Contact
                        </button>
                    </Form>
                </Formik>
            </Model>
        </>
    );
}

export default AddandUpdateContact;