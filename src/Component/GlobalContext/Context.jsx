import { createContext, useContext, useState } from "react";
import { auth, db } from "../../Firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const UserContext = createContext({});

export const useGlobalContext = () => useContext(UserContext);

export default function ContextProvider({ children }) {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "customer"));
    const newData = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const itemObjek = {
        id: doc.id,
        ...doc.data(),
      };
      newData.push(itemObjek);
    });
    setAllData(newData);
    setData(newData);
  };

  //
  const addNewDataCustomer = async (name, level, total, favorit) => {
    // Call API
    // Set newAllData and setData
    try {
      const docRef = await addDoc(collection(db, "customer"), {
        name,
        level,
        total,
        favorit,
      });
      getData();
    } catch (e) {
      alert("Error adding document: ", e.message);
    }
  };

  //update data
  const updateData = async (newData) => {
    const { id, ...restData } = newData;
    // Update Data Here
    const dataAllIndex = allData.findIndex((item) => item.id === id);
    const newAllData = [
      ...allData.slice(0, dataAllIndex),
      newData,
      ...allData.slice(dataAllIndex + 1),
    ];
    setAllData(newAllData);
    if (allData.length !== data.length) {
      const newDataIndex = data.findIndex((item) => item.id === id);
      const newUpdatedData = [
        ...allData.slice(0, newDataIndex),
        newData,
        ...allData.slice(newDataIndex + 1),
      ];
      setData(newUpdatedData);
    } else {
      setData(newAllData);
    }
    // Call API Here
    try {
      const docRef = await updateDoc(doc(db, "customer", id), {
        name: restData.name,
        level: restData.level,
        total: restData.total,
        favorit: restData.favorit,
      });
      getData();
    } catch (error) {
      alert("Error updating document: ", error.message);
    }
  };

  //
  const deleteData = async (id) => {
    // DeleteData Here
    const newAllData = allData.filter((item) => item.id !== id);
    setAllData(newAllData);
    if (allData.length !== data.length) {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
    } else {
      setData(newAllData);
    }
    // Call API Here
    await deleteDoc(doc(db, "customer", id));
  };

  //
  const searchByName = (name) => {
    if (name === "") {
      return setData(allData);
    }
    const newData = [...allData].filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    setData(newData);
  };

  return (
    <UserContext.Provider
      value={{
        data,
        getData,
        searchByName,
        deleteData,
        updateData,
        addNewDataCustomer,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
