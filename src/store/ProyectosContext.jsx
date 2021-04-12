import {createContext, useState, useEffect} from "react";
import {getFirestore} from "../firebase/client";

export const StoreProyectos = createContext();

const db = getFirestore();

const ProyectosContext = ({ children }) => {

    const [data, setData] = useState([]);

    const getData = () => {
        var docRef = db.collection('proyectos');
        docRef.get().then(querySnapshot => {
            let arr = [];
            querySnapshot.forEach(doc => {
              arr.push({data: doc.data(), id: doc.id})
            })
            setData(arr);
          })
          .catch(err => console.log(`error al leer data ${err}`))
      
    }
    useEffect(() => {
        setData(getData())
        console.log("use effect context")
    }, [])
    return( 
        <>
            <StoreProyectos.Provider value={[data, setData]}>
                {children}
            </StoreProyectos.Provider>
        </>
    )
}
export default ProyectosContext;