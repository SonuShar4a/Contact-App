import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../config/firebase";
import AddandUpdateContact from "./AddandUpdateContact";
import useDisclose from "../hooks/useDisclosed";
import { toast } from "react-toastify";
let ContactCard = ({ contact }) => {

  const { isOpen, onClosed, onOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "Contacts", id));
      toast.success("Contact Deleted SuccessFully");
    }
    catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='list' key={contact.id}>
        <div className='user'>
          <i class="fa-regular fa-circle-user"></i>
        </div>
        <div className='content'>
          <h2 className=''>{contact.Name}</h2>
          <h2 className="">{contact.Number}</h2>
          <p className=''>{contact.Email}</p>
        </div>
        <div className='end'>
          <i onClick={() => deleteContact(contact.id)} class=" delete fa-solid fa-trash-can"></i>
          <i onClick={onOpen} class=" edit fa-regular fa-pen-to-square"></i>
        </div>
      </div>

      <AddandUpdateContact isUpdate contact={contact} isOpen={isOpen} onClosed={onClosed} />
    </>
  )
}

export default ContactCard;