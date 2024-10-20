import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar'
import { db } from "./config/firebase";
import { collection, onSnapshot } from 'firebase/firestore';
import ContactCard from './Components/ContactCard';
import AddandUpdateContact from './Components/AddandUpdateContact';
import useDisclose from "./hooks/useDisclosed";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './Components/NotFound';

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClosed, onOpen } = useDisclose();

  //Contact
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "Contacts");
        // const contactsSnapshort = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshort) => {
          const contactsList = snapshort.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          // console.log(contactsList);
          setContacts(contactsList);
          return contactsList;
        });
      }
      catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

//Search.....
  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "Contacts");
    // const contactsSnapshort = await getDocs(contactsRef);

    onSnapshot(contactsRef, (snapshort) => {
      const contactsList = snapshort.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactsList.filter((contacts) =>
        contacts.Name.includes(value)
      );
      // console.log(contactsList);
      setContacts(filteredContacts);
      return filteredContacts;
    });

  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <i class="icon fa-solid fa-magnifying-glass"></i>
        <input onChange={filterContacts} type="text" placeholder='Search Contact' />
        <button onClick={onOpen}><i class="fa-solid fa-plus"> </i></button>
      </div>
      <div>
        {
         contacts.length <=0 ? <NotFound/> :
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}></ContactCard>
          ))
        }
      </div>
      <AddandUpdateContact onClosed={onClosed} isOpen={isOpen} />
      <ToastContainer id="tost" />
    </>
  )
}

export default App;

