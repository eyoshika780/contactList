import React from "react";
import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";


export default function SelectedContact() {

    const [contacts, setContacts] = useState(null)
    console.log("Contacts: ", contacts)
    useEffect(() => {
        async function fetchContacts() {
          try {
            const response = await fetch(
                `https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`
            );
            const result = await response.json();
            setContacts(result);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContacts();
      }, []);
  return "poggers";
}
